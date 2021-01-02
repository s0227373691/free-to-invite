const mongoose = require('mongoose');

const BoardGame = mongoose.model(
    'BoardGame',
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
            type: String,
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
        addedBoardGameList: [
            {
                name: {
                    type: String,
                },
                type: {
                    type: String,
                },
                background: {
                    type: String,
                },
            },
        ],
    })
);

exports.BoardGame = BoardGame;
