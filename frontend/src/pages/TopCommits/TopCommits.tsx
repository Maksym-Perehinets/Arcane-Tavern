import React, { useEffect, useState } from 'react';
import { getTop10Commits } from '../../api/api';

interface Commit {
  hash: string;
  message: string;
  author: string;
  date: string;
  files_count: number;
  insertions: number;
  deletions: number;
  score: number;
}

interface CommitsResponse {
  data: Commit[];
  status: string;
  total: number;
}

const TopCommits: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCommits, setTotalCommits] = useState(0);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        setLoading(true);
        const response: CommitsResponse = await getTop10Commits();
        if (response.status === 'success') {
          setCommits(response.data);
          setTotalCommits(response.total);
        } else {
          setError('Failed to fetch commits');
        }
      } catch (err) {
        setError('Error fetching commits: ' + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const truncateMessage = (message: string, maxLength: number = 80) => {
    return message.length > maxLength ? message.substring(0, maxLength) + '...' : message;
  };

  const getScoreColor = (score: number, maxScore: number) => {
    const ratio = score / maxScore;
    if (ratio > 0.8) return '#10b981'; // green
    if (ratio > 0.6) return '#f59e0b'; // yellow
    if (ratio > 0.4) return '#f97316'; // orange
    return '#ef4444'; // red
  };

  if (loading) {
    return (
      <div className="top-commits-container">
        <div className="loading">Loading top commits...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="top-commits-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  const maxScore = commits.length > 0 ? commits[0].score : 0;

  return (
    <div className="top-commits-container">
      <div className="top-commits-header">
        <h1>🏆 Top 10 Best Commits</h1>
        <p className="commits-subtitle">
          Showing the top 10 commits out of {totalCommits} total commits, ranked by impact and quality
        </p>
      </div>

      <div className="commits-list">
        {commits.map((commit, index) => (
          <div key={commit.hash} className="commit-card">
            <div className="commit-rank">
              <span className="rank-number">#{index + 1}</span>
              <div 
                className="score-badge"
                style={{ backgroundColor: getScoreColor(commit.score, maxScore) }}
              >
                {commit.score.toFixed(1)}
              </div>
            </div>
            
            <div className="commit-content">
              <div className="commit-header">
                <h3 className="commit-message" title={commit.message}>
                  {truncateMessage(commit.message)}
                </h3>
                <code className="commit-hash">{commit.hash.substring(0, 8)}</code>
              </div>
              
              <div className="commit-metadata">
                <span className="commit-author">👤 {commit.author}</span>
                <span className="commit-date">📅 {formatDate(commit.date)}</span>
              </div>
              
              <div className="commit-stats">
                <div className="stat">
                  <span className="stat-label">Files:</span>
                  <span className="stat-value">{commit.files_count}</span>
                </div>
                <div className="stat additions">
                  <span className="stat-label">+</span>
                  <span className="stat-value">{commit.insertions}</span>
                </div>
                <div className="stat deletions">
                  <span className="stat-label">-</span>
                  <span className="stat-value">{commit.deletions}</span>
                </div>
                <div className="stat total">
                  <span className="stat-label">Total:</span>
                  <span className="stat-value">{commit.insertions + commit.deletions}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="ranking-info">
        <h2>📊 How Commits Are Ranked</h2>
        <div className="ranking-factors">
          <div className="factor">
            <strong>Code Impact:</strong> Lines changed with preference for moderate-sized commits
          </div>
          <div className="factor">
            <strong>File Diversity:</strong> Number of files modified
          </div>
          <div className="factor">
            <strong>Message Quality:</strong> Clear, descriptive commit messages
          </div>
          <div className="factor">
            <strong>Balance:</strong> Good ratio between additions and deletions
          </div>
          <div className="factor">
            <strong>Type Bonus:</strong> Bug fixes, features, and improvements get extra points
          </div>
          <div className="factor">
            <strong>Recency:</strong> Recent commits get a small bonus
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCommits;