const express = require('express');
const router = express.Router();

const { Drink } = require('../../modules/newActive/drink');

router.post('/', (req, res) => {
    const {
        activeType,
        startDate,
        endDate,
        title,
        population,
        cost,
        place,
        content,
        liqueurPrice,
        age,
        acceptSex,
    } = req.body;

    const drink = new Drink({
        activeType,
        startDate,
        endDate,
        title,
        population,
        cost,
        place,
        content,
        liqueurPrice,
        age,
        acceptSex,
    });
    drink.save();
});

module.exports = router;
