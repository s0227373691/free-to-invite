const mongoose = require('mongoose');

const Boardgame = mongoose.model(
    'Boardgame',
    new mongoose.Schema({
        primaryType: {
            type: String,
        },
        activeType: {
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
        Precautions: {
            type: String,
        },
        boardGameType: {
            type: String,
        },
    })
);

exports.Boardgame = Boardgame;
