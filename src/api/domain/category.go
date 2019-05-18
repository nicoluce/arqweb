package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type Category struct {
	Id     primitive.ObjectID `json:"id" bson:"_id" required:"false"`
	Name   string             `json:"name" bson:"Name" required:"false"`
	Hidden bool               `json:"hidden" bson:"Hidden" required:"false"`
	Icon   string             `json:"iconClass" bson:"Icon" required:"false"`
}
