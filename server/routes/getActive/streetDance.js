const express = require('express');
const router = express.Router();
const { StreetDance } = require('../../modules/newActive/streetDance');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    StreetDance.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ streetDanceList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
