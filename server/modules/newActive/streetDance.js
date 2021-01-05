const mongoose = require('mongoose');

const StreetDance = mongoose.model(
    'StreetDance',
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
        cost: {
            type: Number,
        },
        content: {
            type: String,
        },
        site: {
            type: String,
        },
        addedLevelTypeList: {
            type: Array,
        },
    })
);
exports.StreetDance = StreetDance;
