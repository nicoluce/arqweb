package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type Category struct {
	Id     primitive.ObjectID `json:"id" bson:"_id" required:"false"`
	Name   string             `json:"name" bson:"Name" required:"true"`
	Hidden bool               `json:"hidden" bson:"Hidden" required:"true"`
}
