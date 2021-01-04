const mongoose = require('mongoose');

const Badminton = mongoose.model(
    'badminton',
    new mongoose.Schema({
        activeType: {
            type: String,
        },
        startDate: {
            type: String,
        },
        endDate: {
            type: String,
        },
        title: {
            type: String,
        },
        place: {
            type: String,
        },
        nets: {
            type: Number,
        },
        badmintonType: {
            type: String,
        },
        population: {
            type: Number,
        },
        cost: {
            type: Number,
        },
        content: {
            type: String,
        },
        strength: {
            type: Array,
        },
    })
);

exports.Badminton = Badminton;
