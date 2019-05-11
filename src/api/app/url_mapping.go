package app

import (
	"github.com/fernetbalboa/arqweb/src/api/controller"
	log "github.com/sirupsen/logrus"
)

var poiController *controller.POIController
var userController *controller.UserController

func init() {
	POIController, err := controller.NewPOIController()
	if err != nil {
		log.Fatalf("Could not create POI controller. Cause: %s", err.Error())
	}
	UserController, err := controller.NewUserController()
	if err != nil {
		log.Fatalf("Could not create User controller. Cause: %s", err.Error())
	}
	poiController = POIController
	userController = UserController
}

// LoadEndpoints is the base function to map endpoints.
func LoadEndpoints() {
	Router.GET("/ping", controller.Ping)

	userGroup := Router.Group("/user")
	userGroup.GET("/login", userController.Login)

	poiGroup := Router.Group("/poi")

	poiGroup.POST("", poiController.AddPOI)
	poiGroup.GET("/search", poiController.SearchPOI)

}
