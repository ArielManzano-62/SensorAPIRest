const express = require('express')
const sensorController = require('../controllers/sensorController')
const sensorEventController = require('../controllers/sensorEventController')

const router = express.Router()

router.route('/').get(sensorController.getAllSensors).post(sensorController.createSensor)

router.route('/:id').patch(sensorController.updateSensor).delete(sensorController.deleteSensor)

router
	.route('/:sensorId/event')
	.post(sensorEventController.setSensorId, sensorEventController.createSensorEvent)
	.get(sensorEventController.setSensorId, sensorEventController.getAllSensorEvents)

module.exports = router
