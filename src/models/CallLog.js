const mongoose = require('mongoose');

const option = {
	timestamps: true,
};

const callLogSchema = new mongoose.Schema(
	{
		status: {
			type: String,
			trim: true,
			required: true,
			uppercase: true,
		},
		caller: {
			type: String,
			required: true,
			trim: true,
		},
		recipient: {
			type: String,
			required: true,
			trim: true,
		},
		endedBy: {
			type: String,
			trim: true,
		},
	},
	option,
);

const callLogModel = mongoose.model('log', callLogSchema);

module.exports = callLogModel;
