package v1

import (
	"fmt"
	"net/http"
	"os/exec"
	"sort"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

type Commit struct {
	Hash       string    `json:"hash"`
	Message    string    `json:"message"`
	Author     string    `json:"author"`
	Date       time.Time `json:"date"`
	FilesCount int       `json:"files_count"`
	Insertions int       `json:"insertions"`
	Deletions  int       `json:"deletions"`
	Score      float64   `json:"score"`
}

func GetTop10Commits(c *gin.Context) {
	commits, err := analyzeGitCommits()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": fmt.Sprintf("Failed to analyze commits: %v", err),
		})
		return
	}

	// Sort commits by score (descending)
	sort.Slice(commits, func(i, j int) bool {
		return commits[i].Score > commits[j].Score
	})

	// Get top 10
	top10 := commits
	if len(commits) > 10 {
		top10 = commits[:10]
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   top10,
		"total":  len(commits),
	})
}

func analyzeGitCommits() ([]Commit, error) {
	// Get commit log with detailed information
	cmd := exec.Command("git", "log", "--pretty=format:%H|%s|%an|%ad", "--date=iso", "--numstat")
	output, err := cmd.Output()
	if err != nil {
		return nil, fmt.Errorf("failed to get git log: %v", err)
	}

	return parseGitLog(string(output))
}

func parseGitLog(output string) ([]Commit, error) {
	lines := strings.Split(output, "\n")
	var commits []Commit
	var currentCommit *Commit

	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		// Check if this is a commit line (contains |)
		if strings.Contains(line, "|") {
			// Process previous commit if exists
			if currentCommit != nil {
				currentCommit.Score = calculateCommitScore(*currentCommit)
				commits = append(commits, *currentCommit)
			}

			// Parse new commit
			parts := strings.Split(line, "|")
			if len(parts) >= 4 {
				date, err := time.Parse("2006-01-02 15:04:05 -0700", parts[3])
				if err != nil {
					date = time.Now() // fallback
				}

				currentCommit = &Commit{
					Hash:       parts[0],
					Message:    parts[1],
					Author:     parts[2],
					Date:       date,
					FilesCount: 0,
					Insertions: 0,
					Deletions:  0,
				}
			}
		} else if currentCommit != nil {
			// This should be a numstat line (insertions	deletions	filename)
			parts := strings.Fields(line)
			if len(parts) >= 3 {
				currentCommit.FilesCount++
				
				if insertions, err := strconv.Atoi(parts[0]); err == nil {
					currentCommit.Insertions += insertions
				}
				if deletions, err := strconv.Atoi(parts[1]); err == nil {
					currentCommit.Deletions += deletions
				}
			}
		}
	}

	// Don't forget the last commit
	if currentCommit != nil {
		currentCommit.Score = calculateCommitScore(*currentCommit)
		commits = append(commits, *currentCommit)
	}

	return commits, nil
}

func calculateCommitScore(commit Commit) float64 {
	score := 0.0

	// Factor 1: Code impact (lines changed, but not too much)
	totalLines := float64(commit.Insertions + commit.Deletions)
	if totalLines > 0 {
		// Favor commits with moderate changes (not too small, not too big)
		if totalLines <= 50 {
			score += totalLines * 0.5 // Small commits get partial credit
		} else if totalLines <= 500 {
			score += 25 + (totalLines-50)*0.8 // Medium commits get good credit
		} else {
			score += 385 - (totalLines-500)*0.2 // Large commits get diminishing returns
		}
	}

	// Factor 2: File diversity
	score += float64(commit.FilesCount) * 2.0

	// Factor 3: Commit message quality
	messageScore := analyzeCommitMessage(commit.Message)
	score += messageScore * 10.0

	// Factor 4: Balance between additions and deletions
	if commit.Insertions > 0 && commit.Deletions > 0 {
		ratio := float64(min(commit.Insertions, commit.Deletions)) / float64(max(commit.Insertions, commit.Deletions))
		score += ratio * 15.0 // Bonus for balanced commits
	}

	// Factor 5: Recency bonus (newer commits get slight bonus)
	daysSinceCommit := time.Since(commit.Date).Hours() / 24
	if daysSinceCommit <= 30 {
		score += (30 - daysSinceCommit) * 0.5
	}

	// Factor 6: Penalize merge commits (they're usually not the "best" individual work)
	if strings.Contains(strings.ToLower(commit.Message), "merge") {
		score *= 0.7
	}

	// Factor 7: Bonus for bug fixes and features
	lowerMessage := strings.ToLower(commit.Message)
	if strings.Contains(lowerMessage, "fix") || strings.Contains(lowerMessage, "bug") {
		score += 20.0
	}
	if strings.Contains(lowerMessage, "feature") || strings.Contains(lowerMessage, "add") {
		score += 15.0
	}
	if strings.Contains(lowerMessage, "refactor") || strings.Contains(lowerMessage, "improve") {
		score += 10.0
	}

	return score
}

func analyzeCommitMessage(message string) float64 {
	score := 0.0

	// Length factor
	messageLen := len(message)
	if messageLen >= 10 && messageLen <= 72 {
		score += 1.0
	} else if messageLen > 72 {
		score += 0.5
	}

	// Capitalization
	if len(message) > 0 && strings.ToUpper(string(message[0])) == string(message[0]) {
		score += 0.5
	}

	// Contains meaningful keywords
	keywords := []string{"implement", "add", "fix", "update", "refactor", "improve", "enhance", "create"}
	for _, keyword := range keywords {
		if strings.Contains(strings.ToLower(message), keyword) {
			score += 0.3
			break
		}
	}

	// Avoid generic messages
	genericMessages := []string{"update", "changes", "misc", "stuff", "wip", "test"}
	for _, generic := range genericMessages {
		if strings.ToLower(strings.TrimSpace(message)) == generic {
			score -= 0.5
			break
		}
	}

	// Check for proper format (starts with verb in imperative mood)
	imperativeVerbs := []string{"add", "fix", "update", "remove", "implement", "refactor", "improve", "create", "delete"}
	for _, verb := range imperativeVerbs {
		if strings.HasPrefix(strings.ToLower(message), verb) {
			score += 0.5
			break
		}
	}

	return maxFloat64(0, score)
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func maxFloat64(a, b float64) float64 {
	if a > b {
		return a
	}
	return b
}