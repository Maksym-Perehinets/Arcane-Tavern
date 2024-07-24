#!/bin/bash

# Ensure DATABASE_NAME is set
if [ -z "$DATABASE_NAME" ]; then
  echo "DATABASE_NAME is not set. Exiting."
  exit 1
fi

echo "DATABASE_NAME is set to: $DATABASE_NAME"

for filename in /docker-entrypoint-initdb.d/*.json; do
  collection_name=$(basename "$filename" .json)
  echo "Processing file: $filename"
  echo "Importing into collection: $collection_name"

  if [[ $filename != *"spell"* ]]; then
    echo "Standard import for: $filename"
    mongoimport --db "$DATABASE_NAME" --collection "$collection_name" --file "$filename" --drop
  else
    echo "Special import for spell file: $filename"
    jq -c '.spell[]' "$filename" | while read -r spell; do
      echo "Importing spell: $spell"
      echo "$spell" | mongoimport --db "$DATABASE_NAME" --collection "$collection_name" --type json
    done
  fi
done
