const mongoose = require('mongoose');

const Movie = mongoose.model(
    'Movie',
    new mongoose.Schema({
        minorType: {
            type: String,
        },
        movieType: {
            type: String,
        },
        date: {
            type: String,
        },
        precautions: {
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

exports.Movie = Movie;
