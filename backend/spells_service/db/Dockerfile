FROM mongo:8.0.0-rc13-jammy

ENV DATABASE_NAME=spells_service

COPY *.json /docker-entrypoint-initdb.d/
COPY init-mongo.sh /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/init-mongo.sh

# Use the default MongoDB entrypoint
ENTRYPOINT ["docker-entrypoint.sh"]

# Run the MongoDB server
CMD ["mongod"]
