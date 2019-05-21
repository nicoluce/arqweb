package app

import (
	"github.com/fernetbalboa/arqweb/src/api/controller"
	log "github.com/sirupsen/logrus"
)

var poiController *controller.POIController
var categoryController *controller.CategoryController
var userController *controller.UserController
var suggestionController *controller.SuggestionController

func init() {
	CategoryController, err := controller.NewCategoryController()
	if err != nil {
		log.Fatalf("Could not create POI controller. Cause: %s", err.Error())
	}
	POIController, err := controller.NewPOIController(categoryController.CategoryStorage)
	if err != nil {
		log.Fatalf("Could not create POI controller. Cause: %s", err.Error())
	}
	UserController, err := controller.NewUserController()
	if err != nil {
		log.Fatalf("Could not create User controller. Cause: %s", err.Error())
	}
	SuggestionController, err := controller.NewSuggestionController(CategoryController.CategoryStorage)
	if err != nil {
		log.Fatalf("Could not create suggestion controller. Cause: %s", err.Error())
	}
	poiController = POIController
	userController = UserController
	categoryController = CategoryController
	suggestionController = SuggestionController
}

// LoadEndpoints is the base function to map endpoints.
func LoadEndpoints() {
	Router.GET("/ping", controller.Ping)

	userGroup := Router.Group("/user")
	userGroup.POST("/signup", userController.Signup)
	userGroup.POST("/login", userController.Login)

	poiGroup := Router.Group("/poi")

	poiGroup.POST("", poiController.AddPOI)
	poiGroup.GET("/search", poiController.SearchPOI)
	poiGroup.PUT("/:id", poiController.EditPOI)

	categoriesGroup := Router.Group("/categories")
	categoriesGroup.GET("", categoryController.GetCategories)
	categoriesGroup.GET("/search", categoryController.SearchCategory)
	categoriesGroup.POST("", categoryController.AddCategory)
	categoriesGroup.PUT("/:id", categoryController.EditCategory)

	suggestionGroup := Router.Group("/suggestion")
	suggestionGroup.POST("/new", suggestionController.AddSuggestion)
	suggestionGroup.PUT("/categories/new/:id/approve", suggestionController.ApproveSuggestion)
	suggestionGroup.PUT("/categories/new/:id/reject", suggestionController.RejectSuggestion)
	suggestionGroup.GET("/categories", suggestionController.GetSuggestions)

}
