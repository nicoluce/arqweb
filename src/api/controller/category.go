package controller

import (
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/fernetbalboa/arqweb/src/api/storage"
	"github.com/gin-gonic/gin"
	"net/http"
)

type CategoryController struct {
	POIStorage storage.POIStorage
}

func CreateCategoryController(POIStorage storage.POIStorage) *CategoryController {
	return &CategoryController{
		POIStorage: POIStorage,
	}
}

func NewCategoryController() (*CategoryController, error) {
	POIStorage, err := storage.NewPOIStorage()
	if err != nil {
		return nil, apierror.Wrapf(err, "Could not create POI controller")
	}

	return CreateCategoryController(POIStorage), nil
}

func (cc *CategoryController) GetCategories(c *gin.Context) {
	categories, err := cc.POIStorage.GetCategories()

	if err != nil {
		_ = c.Error(err)
		return
	}

	c.JSON(http.StatusOK, categories)
}

func (cc *CategoryController) AddCategory(c *gin.Context) {
	var category domain.Category
	err := c.ShouldBindJSON(&category)
	if err != nil || category.Name == "" {
		errorMsg := "Error parsing Category. It should be a Category obj"
		var apiError error
		if err != nil {
			apiError = apierror.BadRequest.Wrapf(err, errorMsg)
		} else {
			apiError = apierror.BadRequest.Newf(errorMsg)
		}
		_ = c.Error(apiError)
		return
	}

	err = cc.POIStorage.AddCategory(&category)
	if err != nil {
		_ = c.Error(err)
		return
	}
}

func (cc *CategoryController) EditCategory(c *gin.Context) {
	categoryId := c.Param("id")
	var newVersionCategory domain.Category
	err := c.ShouldBindJSON(&newVersionCategory)

	if err != nil {
		_ = c.Error(err)
		return
	}

	if categoryId != newVersionCategory.Id.String() {
		apiError := apierror.BadRequest.New("Category field ID can not be updated")
		_ = c.Error(apiError)
		return
	}

	err = cc.POIStorage.EditCategory(&newVersionCategory)
	if err != nil {
		_ = c.Error(err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"id": categoryId, "message": "Category successfully updated",
		"status": "OK", "code": http.StatusOK})
}
