package services

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"log"
	"spell-service/db"
)

func GetSpell(id string) (result []bson.M) {
	requestPipeline := db.GetSpellsPipeline(id)
	database, clientClose := db.Init()
	defer clientClose()
	collection := database.Collection("spells")

	cursor, err := collection.Aggregate(context.TODO(), requestPipeline)
	if err != nil {
		log.Println(err)
	}
	defer func(cursor *mongo.Cursor, ctx context.Context) {
		err := cursor.Close(ctx)
		if err != nil {
			panic(err)
		}
	}(cursor, context.Background())

	if err = cursor.All(context.TODO(), &result); err != nil {
		log.Println(err)
	}

	return result
}
