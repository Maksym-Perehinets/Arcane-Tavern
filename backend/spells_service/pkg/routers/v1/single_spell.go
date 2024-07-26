package v1

import (
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"spell-service/services"
)

// Spells is now exported
func GetSingleSpell(c *gin.Context) {
	id := c.Param("id")
	if id == "" {
		c.JSON(400, gin.H{"error": "id is required"})
		return
	}
	if _, err := primitive.ObjectIDFromHex(id); err != nil {
		c.JSON(400,
			gin.H{"error": "Id should be valid ObjectID. Use endpoint that is provided with each spell."})
		return
	}

	c.JSON(200, services.GetSpell(id))
}
