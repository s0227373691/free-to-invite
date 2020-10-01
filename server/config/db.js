const mongoose = require('mongoose');

const URI =
    'mongodb+srv://test123:test123@cluster0.oxdz0.mongodb.net/goodstock?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db connected...');
    } catch {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
