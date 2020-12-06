const mongoose = require('mongoose');

const Running = mongoose.model(
    'Running',
    new mongoose.Schema({
        minorType: {
            type: String,
        },
        runningType: {
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

exports.Running = Running;
