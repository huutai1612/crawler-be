const mongoose = require('mongoose');

const connectDb = async () => {
	await mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('connected to MongoDB'))
		.catch((err) => console.log(err.message));
};

module.exports = connectDb;
