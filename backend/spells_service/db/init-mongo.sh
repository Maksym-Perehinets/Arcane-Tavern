#!/bin/bash

for filename in /docker-entrypoint-initdb.d/*.json; do
  collection_name=$(basename "$filename" .json)
  mongoimport --db "$DATABASE_NAME" --collection "$collection_name" --file "$filename"
done
