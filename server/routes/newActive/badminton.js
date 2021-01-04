const express = require('express');
const router = express.Router();

const { Badminton } = require('../../modules/newActive/badminton');

router.post('/', (req, res) => {
    console.log(req.body);
    const {
        activeType,
        startDate,
        endDate,
        title,
        place,
        site,
        badmintonType,
        population,
        cost,
        content,
    } = req.body;

    const badminton = new Badminton({
        activeType,
        startDate,
        endDate,
        title,
        place,
        site,
        badmintonType,
        population,
        cost,
        content,
    });
    badminton.save();
});

module.exports = router;
