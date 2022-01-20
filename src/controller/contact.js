const { Router } = require('express');
const router = new Router();
const contactModel = require('../models/Contact');

const findByName = async (req, res, next) => {
	try {
		const name = req.params.name;
		const contactFound = await contactModel.findOne({ name });
		if (!contactFound) {
			res.status(404).send({ err: 'Contact not found' });
			return;
		}
		res.send(contactFound);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
router.get('/contact/name/:name', findByName);

const findByPhoneNumber = async (req, res, next) => {
	try {
		const phone = req.params.phone;
		const contactFound = await contactModel.findOne({ phone });
		if (!contactFound) {
			res.status(404).send({ err: 'Contact not found' });
			return;
		}
		res.send(contactFound);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
router.get('/contact/phone/:phone', findByPhoneNumber);

const createNewContact = async (req, res) => {
	try {
		const newContact = new contactModel(req.body);
		await newContact.save();
		res.status(201).send(newContact);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
router.post('/contact', createNewContact);

module.exports = router;
