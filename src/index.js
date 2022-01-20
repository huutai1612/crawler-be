const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config/config.env' });
const connectDb = require('./database/db');
const server = require('http').createServer(app);
const logRouter = require('./controller/log');
const contactRouter = require('./controller/contact');
var path = require('path');

connectDb();
const PORT = process.env.PORT;
app.use('/', express.static(__dirname + '/build'));
app.use(express.json());
app.use(cors());
app.use(contactRouter);
app.use(logRouter);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/build/index.html'));
});

server.listen(PORT, () => {
	try {
		console.log(`server listening on port ${PORT}`);
	} catch (error) {
		console.log(error.message);
	}
});
