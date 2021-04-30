const SensorEvent = require('../models/sensorEventModel')

exports.setSensorId = (req, res, next) => {
	if (!req.body.sensor) req.body.sensor = req.params.sensorId
	next()
}

exports.getAllSensorEvents = async (req, res) => {
	try {
		const sensorEvents = await SensorEvent.find()

		res.status(200).json({
			status: 'success',
			results: sensorEvents.length,
			data: {
				sensorEvents,
			},
		})
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		})
	}
}

exports.createSensorEvent = async (req, res) => {
	try {
		const newSensorEvent = await SensorEvent.create(req.body)

		res.status(201).json({
			status: 'success',
			data: {
				sensorEvent: newSensorEvent,
			},
		})
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		})
	}
}
