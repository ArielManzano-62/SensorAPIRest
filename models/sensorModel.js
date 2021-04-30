const mongoose = require('mongoose')

const sensorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Un sensor requiere un nombre.'],
		unique: true,
	},
	location: {
		type: {
			type: String,
			default: 'Point',
			enum: ['Point'],
		},
		lat: {
			type: Number,
			default: 0,
		},
		lng: {
			type: Number,
			default: 0,
		},
	},
	active: Boolean,
	minVal: Number,
	maxVal: Number,
})

const Sensor = mongoose.model('Sensor', sensorSchema)

module.exports = Sensor
