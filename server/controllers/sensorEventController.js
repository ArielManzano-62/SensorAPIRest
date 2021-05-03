const SensorEvent = require('../models/sensorEventModel')
const Sensor = require('../models/sensorModel')

exports.setSensorId = (req, res, next) => {
	if (!req.body.sensor) req.body.sensor = req.params.sensorId
	next()
}

exports.getAllSensorEvents = async (req, res) => {
	try {
		const sensorEvents = await SensorEvent.find({ sensor: req.body.sensor })

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

exports.validateValue = async (req, res, next) => {
	const sensor = await Sensor.findById(req.params.sensorId)
	if (sensor && (sensor.valueMin > req.body.value || sensor.valueMax < req.body.value)) {
		res.status(400).json({
			status: 'fail',
			message: `El valor debe ser entre los valores: [${sensor.valueMin} - ${sensor.valueMax}]`,
		})
		next(new Error())
	}
	next()
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
