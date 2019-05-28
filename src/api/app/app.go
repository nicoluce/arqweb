// Package app is the start package of CX Emails
// It has router start configuration and URL route mapping.
// Gin-Gonic Framework: https://github.com/gin-gonic/gin
// is used for routing and server working.
package app

import (
	"github.com/nicoluce/arqweb/src/api/config"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"os"
)

// Router is the base Gin Router used for mapping endpoints.
var Router *gin.Engine

// Start app point.
func Start() {
	Router = config.ConfiguredRouter()
	LoadEndpoints()

	port := os.Getenv("$PORT")
	log.Infof("Port: %s", port)
	_ = Router.Run(":" + port)
}
