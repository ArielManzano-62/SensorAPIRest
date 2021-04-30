const express = require('express')
const sensorController = require('../controllers/sensorController')

const router = express.Router()

router.route('/').get(sensorController.getAllSensors).post(sensorController.createSensor)

router.route('/:id').patch(sensorController.updateSensor).delete(sensorController.deleteSensor)

module.exports = router
