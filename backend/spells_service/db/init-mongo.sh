#!/bin/bash

for filename in /docker-entrypoint-initdb.d/*.json; do
  collection_name=$(basename "$filename" .json)

  if [[ $filename != *"spell"* ]]; then
    # Standard import for all files sources and index
    mongoimport --db "$DATABASE_NAME" --collection "$collection_name" --file "$filename" --drop
  else
    # For spell file import differs in order to gave each of them a unique _id
    jq -c '.spell[]' "$filename" | while read -r spell; do # Remove the array and iterate over the objects
      mongoimport --db "$DATABASE_NAME" --collection "$collection_name" --type json
    done
  fi
done
