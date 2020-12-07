const mongoose = require('mongoose');

const BoardGame = mongoose.model(
    'BoardGame',
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
        boardGameType: {
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

exports.BoardGame = BoardGame;
