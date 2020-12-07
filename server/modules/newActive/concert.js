const mongoose = require('mongoose');

const Concert = mongoose.model(
    'Concert',
    new mongoose.Schema({
        activeType: {
            type: String,
        },
        musicType: {
            type: String,
        },
        precautions: {
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
