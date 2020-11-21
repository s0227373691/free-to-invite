const mongoose = require('mongoose');

const URI =
    'mongodb+srv://js0731:0000@cluster0.ovk2p.mongodb.net/js0731?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        mongoose.set('useCreateIndex', true);
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongodb connected...');
    } catch {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
