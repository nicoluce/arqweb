package storage_test

import (
	"context"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/fernetbalboa/arqweb/src/api/storage"
	"github.com/fernetbalboa/arqweb/src/api/test"
	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"testing"
	"time"
)

func TestSearchCategory(t *testing.T) {
	//Given
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	CatCollection := client.Database(TestDB).Collection(CategoryTestCollection)

	POIStorage, _ := storage.CreateCategoryStorage(CatCollection)

	t.Run("Search category by name", func(t *testing.T) {
		//noinspection GoUnhandledErrorResult
		defer client.Database(TestDB).Drop(context.Background())
		category := test.DefaultCategory()
		anotherCategory := test.DefaultCategory()
		anotherCategory.Name = "anotherName"

		saveErr1 := POIStorage.AddCategory(category)
		saveErr2 := POIStorage.AddCategory(anotherCategory)

		filter := &domain.CategoryFilter{Name: category.Name}

		//When
		foundCategories, searchErr := POIStorage.SearchCategory(filter)

		//Then
		assert.NoError(t, saveErr1)
		assert.NoError(t, saveErr2)
		assert.NoError(t, searchErr)

		assert.Contains(t, foundCategories, category)
		assert.NotContains(t, foundCategories, anotherCategory)
	})

	t.Run("Search category by hidden", func(t *testing.T) {
		//noinspection GoUnhandledErrorResult
		defer client.Database(TestDB).Drop(context.Background())
		category := test.DefaultCategory()
		hiddenCategory := test.DefaultCategory()
		hiddenCategory.Hidden = true

		saveErr1 := POIStorage.AddCategory(category)
		saveErr2 := POIStorage.AddCategory(hiddenCategory)

		filter := &domain.CategoryFilter{Hidden: false}

		//When
		foundCategories, searchErr := POIStorage.SearchCategory(filter)

		//Then
		assert.NoError(t, saveErr1)
		assert.NoError(t, saveErr2)
		assert.NoError(t, searchErr)

		assert.Contains(t, foundCategories, category)
		assert.NotContains(t, foundCategories, hiddenCategory)
	})

}
