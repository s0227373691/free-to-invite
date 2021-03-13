const express = require('express');
const router = express.Router();
const { Basketball } = require('../../modules/newActive/basketball');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    Basketball.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ BasketballList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
