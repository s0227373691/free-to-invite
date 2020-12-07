const express = require('express');
const router = express.Router();
const _ = require('lodash');

const { Concert } = require('../../../../modules/activeForm/free/concert');

router.post('/', (req, res) => {
    console.log(req.body);
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
