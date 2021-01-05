const express = require('express');
const router = express.Router();

const { Mahjong } = require('../../modules/newActive/mahjong');

router.post('/', (req, res) => {
    const {
        activeType,
        startDate,
        endDate,
        title,
        population,
        minCost,
        maxCost,
        place,
        content,
        smoking,
        offerFood,
        offerDrink,
        electricTable,
    } = req.body;

    const mahjong = new Mahjong({
        activeType,
        startDate,
        endDate,
        title,
        population,
        minCost,
        maxCost,
        place,
        content,
        smoking,
        offerFood,
        offerDrink,
        electricTable,
    });
    mahjong.save();
});

module.exports = router;
