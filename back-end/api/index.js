const express = require('express')
const app = express()
var { createHandler } = require("graphql-http/lib/use/express")


const cors = require("cors");

const schema = require('./schema/schema')


const mongoose = require('mongoose')
const url = process.env.DATABASE_CONNECT_STRING
mongoose.connect(url)
const db = mongoose.connection.useDb("city_db")
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connect to database'))
const allowedOrigins = [' http://localhost:3000','https://weather-report-front-end.vercel.app']
app.use(cors())
app.all('/graphql', createHandler({
    schema: schema
}))

app.listen(5000)
console.log("Running a GraphQL API server at http://localhost:5000/graphql")


module.exports = app;