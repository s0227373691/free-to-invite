const mongoose = require('mongoose');

const Shopping = mongoose.model(
    'Shopping',
    new mongoose.Schema({
        primaryType: {
            type: String,
        },
        minorType: {
            type: String,
        },
        date: {
            type: String,
        },
        people: {
            type: Number,
        },
        title: {
            type: String,
        },
        content: {
            type: String,
        },
    })
);

exports.Shopping = Shopping;
