const express = require('express');
const router = express.Router();

const { Movie } = require('../../modules/newActive/movie');

router.post('/', (req, res) => {
    const {
        activeType,
        date,
        population,
        boardGameType,
        title,
        content,
    } = req.body;

    const movie = new Movie({
        activeType,
        date,
        population,
        boardGameType,
        title,
        content,
    });
    movie.save();
});

module.exports = router;
