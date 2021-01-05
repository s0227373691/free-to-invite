const express = require('express');
const router = express.Router();

const { StreetDance } = require('../../modules/newActive/streetDance');

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
        site,
        addedLevelTypeList,
    } = req.body;

    const streetDance = new StreetDance({
        activeType,
        startDate,
        endDate,
        title,
        population,
        cost,
        place,
        content,
        site,
        addedLevelTypeList,
    });
    streetDance.save();
});

module.exports = router;
