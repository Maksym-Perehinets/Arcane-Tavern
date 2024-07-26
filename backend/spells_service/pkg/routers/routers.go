package routers

import (
	"github.com/gin-gonic/gin"
	"spell-service/routers/v1"
)

//func Init() {
//	router := gin.Default()
//	port := os.Getenv("GIN_PORT")
//	router.GET("/api/v1/spells/", v1.GetSpells)
//	router.GET("/api/v1/spells/single/:id", v1.GetSingleSpell)
//	err := router.Run(":" + port)
//	if err != nil {
//		return
//	}
//}

func SetupRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		v1Route := api.Group("/v1")
		{
			spells := v1Route.Group("/spells")
			{
				spells.GET("/", v1.GetSpells)
				spells.GET("/single/:id", v1.GetSingleSpell)
			}
		}
	}
}
