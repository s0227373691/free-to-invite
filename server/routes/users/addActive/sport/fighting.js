const express = require('express');
const router = express.Router();
const _ = require('lodash');

const { Fighting } = require('../../../../modules/activeForm/sport/fighting');

router.post('/', (req, res) => {
    console.log(req.body);
    const {
        activeType,
        date,
        people,
        precautions,
        movieTypee,
        title,
        content,
    } = req.body;

    const fighting = new Fighting({
        activeType,
        date,
        people,
        precautions,
        movieTypee,
        title,
        content,
    });
    fighting.save();
});

module.exports = router;
