package setup

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"spell-service/routers"
)

var corsConfig = cors.Config{
	AllowOrigins:     []string{"http://localhost:8181"},
	AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"},
	AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type"},
	AllowCredentials: true,
}

func setupServer() *gin.Engine {
	mode := os.Getenv("GIN_MODE")
	if mode == "" {
		mode = "release"
	}
	gin.SetMode(mode)
	r := gin.Default()
	r.Use(cors.New(corsConfig))

	// Set up your routes
	routers.SetupRoutes(r)

	// Set up your error handlers
	r.NoRoute(func(c *gin.Context) {
		c.JSON(http.StatusNotFound, "The specified route is not present")
	})

	return r
}

func RunServer() {
	port := os.Getenv("GIN_PORT")
	if port == "" {
		port = "80"
	}
	r := setupServer()
	err := r.Run(":" + port)
	if err != nil {
		return
	}
}
