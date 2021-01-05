const mongoose = require('mongoose');

const Drink = mongoose.model(
    'Drink',
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
        population: {
            type: Number,
        },
        cost: {
            type: Number,
        },
        place: {
            type: String,
        },
        content: {
            type: String,
        },
        liqueurPrice: {
            type: String,
        },
        age: {
            type: String,
        },
        acceptSex: {
            type: String,
        },
    })
);
exports.Drink = Drink;
