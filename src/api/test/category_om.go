package test

import "github.com/fernetbalboa/arqweb/src/api/domain"

func DefaultCategory() *domain.Category {
	return &domain.Category{
		Id:         NewDocumentId(),
		Name: 		"aName",
		Hidden: 	false,
		Icon: 		"anIcon",
	}
}
