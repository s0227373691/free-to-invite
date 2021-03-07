const express = require('express');
const router = express.Router();
const { Drink } = require('../../modules/newActive/drink');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    Drink.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ drinkList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
