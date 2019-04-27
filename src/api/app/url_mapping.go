package app

import (
	"github.com/fernetbalboa/arqweb/src/api/controller"
)

var poiController = controller.NewPOIController()

// LoadEndpoints is the base function to map endpoints.
func LoadEndpoints() {
	Router.GET("/ping", controller.Ping)

	Router.POST("/poi", poiController.AddPOI)

}
