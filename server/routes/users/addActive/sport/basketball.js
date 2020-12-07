const express = require('express');
const router = express.Router();
const _ = require('lodash');

const {
    Basketball,
} = require('../../../../modules/activeForm/sport/basketball');

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

    const basketball = new Basketball({
        activeType,
        date,
        people,
        precautions,
        movieTypee,
        title,
        content,
    });
    basketball.save();
});

module.exports = router;
