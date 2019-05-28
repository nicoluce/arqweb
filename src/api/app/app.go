// Package app is the start package of CX Emails
// It has router start configuration and URL route mapping.
// Gin-Gonic Framework: https://github.com/gin-gonic/gin
// is used for routing and server working.
package app

import (
	"fmt"
	"github.com/nicoluce/arqweb/src/api/config"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"os"
	"strings"
)

// Router is the base Gin Router used for mapping endpoints.
var Router *gin.Engine

// Start app point.
func Start() {
	Router = config.ConfiguredRouter()
	LoadEndpoints()

	fmt.Println()
	for _, e := range os.Environ() {
		pair := strings.Split(e, "=")
		fmt.Println(pair[0])
	}

	port := os.Getenv("$PORT")
	log.Infof("Port: %s", port)
	_ = Router.Run(":" + port)
}
