# Introduction
It is the back-end for tracking Canada city information:
 - It can get geo information of <font color="red">Canada city </font>.
 - The city data is saved in remote MongoDb
 - The query is built by graphql
 - All secret values are saved in env

eg. query [https://weather-report-back-end.vercel.app/graphql] with
``` 
    query GetCities {
        getCities {
            _id
            name
            location
        }
    }
```
return example
```
{
    "data": {
        "getCities": [
            {
                "_id": "667bfb0629cfa3d02a3e639e",
                "name": "(Old) Ottawa",
                "location": [
                    "-75.68233411939545",
                    "45.394565549999996"
                ],
                "address": {
                    "state": "Ontario",
                    "country": "Canada"
                }
            },
            {
                "_id": "667bfb0629cfa3d02a3e63c1",
                "name": "Abbotsford",
                "location": [
                    "-122.329479",
                    "49.0521162"
                ],
                "address": {
                    "state": "British Columbia",
                    "country": "Canada"
                }
            },
            ...
        ]
    }
}
```

# Local
```
npm run dev
```
it will be found at http://localhost:5000/graphql

the seed data is here : data\place-city.ndjson
