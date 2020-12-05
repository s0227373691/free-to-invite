const mongoose = require('mongoose');

const Concert = mongoose.model(
    'Concert',
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

exports.Concert = Concert;
