const mongoose = require('mongoose');

const Fighting = mongoose.model(
    'Fighting',
    new mongoose.Schema({
        activeType: {
            type: String,
        },
        date: {
            type: String,
        },
        fightingType: {
            type: String,
        },
        people: {
            type: Number,
        },
        precautions: {
            type: String,
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
