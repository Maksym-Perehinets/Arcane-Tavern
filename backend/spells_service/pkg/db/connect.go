package db

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"os"
)

var (
	mongodbConnectionString = getEnv("MONGO_URI")
	mongodbDatabase         = getEnv("MONGO_DB")
)

func Init() (*mongo.Database, func()) {
	clientOptions := options.Client().ApplyURI(mongodbConnectionString)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	database := client.Database(mongodbDatabase)

	return database, func() {
		err := client.Disconnect(context.Background())
		if err != nil {
			panic(err)
		}
	}
}

func getEnv(key string) string {
	value := os.Getenv(key)
	if value == "" {
		log.Panicf("Environment variable %s not set", key)
	}
	return value
}
