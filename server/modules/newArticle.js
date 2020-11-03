const mongoose = require('mongoose');

const NewArticle = mongoose.model(
    'NewArticle',
    new mongoose.Schema({
        board: {
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

exports.NewArticle = NewArticle;
