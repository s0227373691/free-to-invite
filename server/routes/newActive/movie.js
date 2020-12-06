const express = require('express');
const router = express.Router();
const _ = require('lodash');

const { Movie } = require('../../../../modules/activeForm/free/movie');

router.post('/', (req, res) => {
    console.log(req.body);
    const {
        minorType,
        date,
        people,
        precautions,
        movieTypee,
        title,
        content,
    } = req.body;

    const movie = new Movie({
        minorType,
        date,
        people,
        precautions,
        movieTypee,
        title,
        content,
    });
    movie.save();
});

module.exports = router;
