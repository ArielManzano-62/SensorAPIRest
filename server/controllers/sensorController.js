const SensorEvent = require('../models/sensorEventModel')
const Sensor = require('../models/sensorModel')

exports.getAllSensors = async (req, res) => {
	try {
		const sensors = await Sensor.find()

		res.status(200).json({
			status: 'success',
			results: sensors.length,
			data: {
				sensors,
			},
		})
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		})
	}
}

exports.createSensor = async (req, res) => {
	try {
		const newSensor = await Sensor.create(req.body)

		res.status(201).json({
			status: 'success',
			data: {
				sensor: newSensor,
			},
		})
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		})
	}
}

exports.updateSensor = async (req, res) => {
	try {
		const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		})

		res.status(200).json({
			status: 'success',
			data: {
				sensor,
			},
		})
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		})
	}
}

exports.deleteSensor = async (req, res) => {
	try {
		await Sensor.findByIdAndDelete(req.params.id)
		await SensorEvent.deleteMany({ sensor: req.params.id })

		res.status(204).json({
			status: 'success',
			data: null,
		})
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err,
		})
	}
}
