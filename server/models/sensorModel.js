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
		latitude: {
			type: Number,
			default: 0,
		},
		longitude: {
			type: Number,
			default: 0,
		},
	},
	active: Boolean,
	valueMin: Number,
	valueMax: Number,
})

const Sensor = mongoose.model('Sensor', sensorSchema)

module.exports = Sensor
