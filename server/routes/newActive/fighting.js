const express = require('express');
const router = express.Router();

const { Fighting } = require('../../modules/newActive/fighting');

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
