const { Router } = require('express');
const CallLogModel = require('../models/CallLog');
const router = new Router();

const createNewLog = async (req, res, next) => {
	try {
		const newLog = await new CallLogModel(req.body);
		await newLog.save();
		res.status(201).send(newLog);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
router.post('/log', createNewLog);

const updateLog = async (req, res, next) => {
	try {
		const AVAILABLE_UPDATE = ['status', 'caller', 'recipient', 'endedBy'];
		const updateFields = Object.keys(req.body);
		const _id = req.params.id;
		const foundedLog = await CallLogModel.findById(_id);
		const isValidUpdate = updateFields.every((update) =>
			AVAILABLE_UPDATE.includes(update),
		);

		if (!isValidUpdate)
			return res.status(400).send({ error: 'Need Valid field to update' });

		updateFields.forEach((field) => (foundedLog[field] = req.body[field]));
		await foundedLog.save();
		res.send(foundedLog);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
router.put('/log/:id', updateLog);

module.exports = router;
