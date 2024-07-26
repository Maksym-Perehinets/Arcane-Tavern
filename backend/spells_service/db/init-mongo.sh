#!/bin/bash

for filename in /docker-entrypoint-initdb.d/*.json; do
  collection_name=$(basename "$filename" .json)

  if [[ $filename != *"spell"* ]]; then
    # add each document to the collection as separate element
    jq -c 'to_entries | map({ (.key): .value })' "$filename" | while read -r doc; do
      mongoimport --db "$DATABASE_NAME" --collection "$collection_name" --type json --jsonArray --file <(echo "$doc")
    done
  else
    # For spell file import differs in order to gave each of them a unique _id
    jq -c '.spell' "$filename" | while read -r spell; do # Remove the array and iterate over the objects
      mongoimport --db "$DATABASE_NAME" --collection "spells" --type json --jsonArray --file <(echo "$spell")
    done
  fi
done
