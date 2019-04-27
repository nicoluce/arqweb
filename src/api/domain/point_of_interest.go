package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type PointOfInterest struct {
	Id          primitive.ObjectID
	Title       string
	Category    string
	OwnerId     int64
	Description string
	Type        string
	Lat         float64
	Long        float64
}
