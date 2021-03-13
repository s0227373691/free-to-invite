const express = require('express');
const router = express.Router();
const { Mahjong } = require('../../modules/newActive/mahjong');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    Drink.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ mahjongList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
