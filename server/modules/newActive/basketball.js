const mongoose = require('mongoose');

const Basketball = mongoose.model(
    'Basketball',
    new mongoose.Schema({
        activeType: {
            type: String,
        },
        basketballType: {
            type: String,
        },
        difficulty: {
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

exports.Basketball = Basketball;
