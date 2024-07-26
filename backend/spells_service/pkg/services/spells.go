package services

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"log"
	"spell-service/db"
)

// GetSpells returns a list of spells Accepts skip and limit as parameters
// Returns a list of spells starting from the end of last page and returns desired amount on page
func GetSpells(page int64, amount int64) (result []bson.M) {
	requestPipeline := db.SpellsBasePipeline
	database, clientClose := db.Init()
	defer clientClose()
	collection := database.Collection("spells")

	requestPipeline = append(
		requestPipeline,
		bson.D{{"$skip", (page - 1) * amount}},
		bson.D{{"$limit", amount}},
	)
	cursor, err := collection.Aggregate(context.TODO(), requestPipeline)
	defer cursor.Close(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	if err = cursor.All(context.TODO(), &result); err != nil {
		log.Fatal(err)
	}
	return result
}
