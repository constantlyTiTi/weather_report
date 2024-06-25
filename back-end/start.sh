#!/bin/bash

# Change to the mongodb-docker directory
cd docker/mongo

# Run docker-compose up to build and start the containers
docker-compose up --build -d

cd -

nodemon server.js