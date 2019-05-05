package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type PointOfInterest struct {
	Id          primitive.ObjectID `json:"_id" bson:"_id" required:"false"`
	Title       string `json:"title" bson:"title" required:"true"`
	Category    string `json:"category" bson:"category" required:"true"`
	OwnerId     int64 `json:"ownerId" bson:"ownerId" required:"false"`
	Description string `json:"description" bson:"description" required:"false"`
	Type        string `json:"type" bson:"type" required:"true"`
	Lat         float64 `json:"lat" bson:"lat" required:"false"`
	Long        float64 `json:"long" bson:"long" required:"false"`
}
