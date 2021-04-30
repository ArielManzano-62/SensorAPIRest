const mongoose = require('mongoose')

const sensorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Un sensor requiere un nombre.'],
		unique: true,
	},
	location: {
		// GeoJSON
		type: {
			type: String,
			default: 'Point',
			enum: ['Point'],
		},
		coordinates: [Number],
	},
	active: Boolean,
	minVal: Number,
	maxVal: Number,
})

module.exports = sensorSchema
