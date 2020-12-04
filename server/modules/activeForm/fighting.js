const mongoose = require('mongoose');

const Fighting = mongoose.model(
    'Fighting',
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

exports.Fighting = Fighting;
