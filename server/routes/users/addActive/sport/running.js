const express = require('express');
const router = express.Router();
const _ = require('lodash');

const { Running } = require('../../../../modules/activeForm/sport/running');

router.post('/', (req, res) => {
    console.log(req.body);
    const {
        minorType,
        date,
        people,
        precautions,
        runningType,
        title,
        content,
    } = req.body;

    const running = new Running({
        minorType,
        date,
        people,
        precautions,
        runningType,
        title,
        content,
    });
    running.save();
});

module.exports = router;
