const express = require('express');
const router = express.Router();

const { Concert } = require('../../modules/newActive/concert');

router.post('/', (req, res) => {
    const {
        activeType,
        date,
        people,
        precautions,
        musicType,
        title,
        content,
    } = req.body;

    const concert = new Concert({
        activeType,
        date,
        people,
        precautions,
        musicType,
        title,
        content,
    });
    concert.save();
});

module.exports = router;
