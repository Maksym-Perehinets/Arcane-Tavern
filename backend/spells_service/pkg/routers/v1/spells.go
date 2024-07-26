package v1

import (
	"github.com/gin-gonic/gin"
	"spell-service/services"
	"strconv"
)

// GetSpells returns a list of spells. It accepts the page number and the number of spells per page as parameters.
// It returns a list of spells starting from the end of the last page and returns the desired amount on the current page.
func GetSpells(c *gin.Context) {
	page, err := strconv.ParseInt(c.DefaultQuery("page", "1"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{"error": "Invalid page number"})
		return
	}
	amount, err := strconv.ParseInt(c.DefaultQuery("amount", "10"), 10, 64)
	if err != nil {
		c.JSON(400, gin.H{"error": "Invalid limit number"})
		return
	}

	c.JSON(200, services.GetSpells(page, amount))
}
