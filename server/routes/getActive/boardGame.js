const express = require('express');
const router = express.Router();
const { BoardGame } = require('../../modules/newActive/boardGame');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    BoardGame.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ boardgameList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
