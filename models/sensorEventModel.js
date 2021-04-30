const mongoose = require('mongoose')

const sensorEventSchema = new mongoose.Schema({
	sensor: {
		type: mongoose.Schema.ObjectId,
		ref: 'Sensor',
		required: [true, 'El evento debe ser de un sensor.'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	value: Number,
})

const SensorEvent = mongoose.model('SensorEvent', sensorEventSchema)

module.exports = SensorEvent
