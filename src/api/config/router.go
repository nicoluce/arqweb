package config

import (
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/gin-gonic/gin"
)

func ConfiguredRouter() *gin.Engine {
	router := gin.New()

	//Recover from panics and errors
	router.Use(apierror.CatchAPIErrors())

	return router
}
