## Introduction
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
"data": {
        "getCities": [
            {
                "_id": "667bfb0629cfa3d02a3e63af",
                "name": "Whitehorse",
                "location": null
            },
            {
                "_id": "667bfb0629cfa3d02a3e63f6",
                "name": "Cold Lake",
                "location": null
            }
            ...
        ]
```