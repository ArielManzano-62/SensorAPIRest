const express = require('express')
const sensorRouter = require('./routes/sensorRoute')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use(cors())

// ROUTES
app.use('/api/v1/sensors', sensorRouter)

module.exports = app
