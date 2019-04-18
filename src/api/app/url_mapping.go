package app

import (
	"github.com/fernetbalboa/arqweb/src/api/controller"
)


// LoadEndpoints is the base function to map endpoints.
func LoadEndpoints() {
	Router.GET("/ping", controller.Ping)

}
