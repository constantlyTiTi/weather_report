#!/bin/bash

FROM mongo

CMD mongoimport --db city_db --collection cities --file place-city.json --type json --jsonArray --uri