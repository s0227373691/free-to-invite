const express = require('express');
const router = express.Router();

const { Running } = require('../../modules/newActive/running');

router.post('/', (req, res) => {
    const {
        activeType,
        date,
        people,
        precautions,
        runningType,
        title,
        content,
    } = req.body;

    const running = new Running({
        activeType,
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
