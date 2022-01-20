const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' });
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const CallLogModel = require('./models/CallLog');

const PORT = process.env.PORT || 8080;
app.use(express.json());

const connectDb = async () => {
	await mongoose
		.connect(
			'mongodb+srv://huutai1612:0987418301@cluster0.rdo2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
		)
		.then(() => console.log('connected to MongoDB'))
		.catch((err) => console.log(err.message));
};

server.listen(PORT, async () => {
	try {
		await connectDb();
		console.log(`server listening on port ${PORT}`);
	} catch (error) {
		console.log(error.message);
	}
});
