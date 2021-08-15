#!/bin/sh -x

docker-compose down

git pull origin master
chmod 777 pgadmin

docker-compose -f docker-compose.yml -f docker-production.yml build
docker-compose -f docker-compose.yml -f docker-production.yml up -d