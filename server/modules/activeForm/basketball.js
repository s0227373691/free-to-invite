const mongoose = require('mongoose');

const Basketball = mongoose.model(
    'Basketball',
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

exports.Basketball = Basketball;
