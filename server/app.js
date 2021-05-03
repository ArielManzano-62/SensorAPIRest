const express = require('express')
const sensorRouter = require('./routes/sensorRoute')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.use(cors())

app.use(morgan('tiny'))

// ROUTES
app.use('/api/v1/sensors', sensorRouter)

module.exports = app
