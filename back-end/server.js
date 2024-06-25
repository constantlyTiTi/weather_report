const express = require('express')
var { createHandler } = require("graphql-http/lib/use/express")

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const cors = require("cors");

const schema = require('./schema/schema')

 
const dev = process.env.NODE_ENV !== 'production'

const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const mongoose = require('mongoose')
const url = `mongodb://localhost:27017/city_db`
mongoose.connect(url)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connect to database'))

// app.all('/graphql', cors(), createHandler({
//     schema: schema
// }))

app.prepare().then(() => {
    createServer(async (req, res) => {
      try {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
   
        if (pathname === '/a') {
          await app.render(req, res, '/a', query)
        } else if (pathname === '/b') {
          await app.render(req, res, '/b', query)
        }else if (pathname === '/graphql') {
            createHandler({
                schema: schema
            })
          } 
        else {
          await handle(req, res, parsedUrl)
        }
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })
      .once('error', (err) => {
        console.error(err)
        process.exit(1)
      })
      .listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port}`)
      })
  })

module.exports = app;