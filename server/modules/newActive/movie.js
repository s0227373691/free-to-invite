const mongoose = require('mongoose');

const Movie = mongoose.model(
    'Movie',
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
        population: {
            type: Number,
        },
        cost: {
            type: Number,
        },
        content: {
            type: String,
        },
        movieName: {
            type: String,
        },
        addedMovieTypeList: {
            type: Array,
        },
    })
);

exports.Movie = Movie;
