const mongoose = require('mongoose');

const option = {
	timestamps: true,
};

const contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
		},
		domain: {
			type: String,
			trim: true,
		},
		address: {
			type: String,
			trim: true,
		},
		phone: {
			type: String,
			trim: true,
			required: true,
		},
	},
	option,
);

const contactModel = mongoose.model('contact', contactSchema);

module.exports = contactModel;
