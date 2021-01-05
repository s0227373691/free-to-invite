const mongoose = require('mongoose');

const Mahjong = mongoose.model(
    'Mahjong',
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
        place: {
            type: String,
        },
        minCost: {
            type: Number,
        },
        maxCost: {
            type: Number,
        },
        content: {
            type: String,
        },
        smoking: {
            type: String,
        },
        offerFood: {
            type: String,
        },
        offerDrink: {
            type: String,
        },
        electricTable: {
            type: String,
        },
    })
);
exports.Mahjong = Mahjong;
