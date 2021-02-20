const express = require('express');
const router = express.Router();
const { BoardGame } = require('../../modules/newActive/boardGame');
router.get('/', (req, res) => {
    BoardGame.find({})
        .then((data) => {
            res.json({ boardgameList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
