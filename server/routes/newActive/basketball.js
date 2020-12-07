const express = require('express');
const router = express.Router();

const { Basketball } = require('../../modules/newActive/basketball');

router.post('/', (req, res) => {
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
