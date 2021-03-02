const express = require('express');
const router = express.Router();
const { Movie } = require('../../modules/newActive/movie');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    Movie.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ movieList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
