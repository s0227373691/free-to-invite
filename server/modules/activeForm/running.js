const mongoose = require('mongoose');

const Running = mongoose.model(
    'Running',
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

exports.Running = Running;
