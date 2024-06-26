#!/bin/bash

mongoimport --db='city_db' --collection='cities' --file='/tmp/place-city.ndjson' --jsonArray --username='root' --password='root' --authenticationDatabase=admin