const express = require('express')
const sensorRouter = require('./routes/sensorRoute')

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

// ROUTES
app.use('/api/v1/sensors', sensorRouter)

module.exports = app
