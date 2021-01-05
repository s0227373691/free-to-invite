const express = require('express');
const router = express.Router();

const { Movie } = require('../../modules/newActive/movie');

router.post('/', (req, res) => {
    const {
        activeType,
        startDate,
        endDate,
        title,
        place,
        population,
        cost,
        content,
        movieName,
        addedMovieTypeList,
    } = req.body;

    const movie = new Movie({
        activeType,
        startDate,
        endDate,
        title,
        place,
        population,
        cost,
        content,
        movieName,
        addedMovieTypeList,
    });
    movie.save();
});

module.exports = router;
