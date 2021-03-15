const express = require('express');
const router = express.Router();
const { Active } = require('../../modules/active');
router.get('/:num', (req, res) => {
    Active.find({ activeType: '桌遊' })
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ boardgameList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
