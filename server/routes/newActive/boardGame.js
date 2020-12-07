const express = require('express');
const router = express.Router();

const { BoardGame } = require('../../modules/newActive/boardGame');

router.post('/', (req, res) => {
    const {
        activeType,
        date,
        people,
        precautions,
        boardgameType,
        title,
        content,
    } = req.body;

    const boardGame = new BoardGame({
        activeType,
        date,
        people,
        precautions,
        boardgameType,
        title,
        content,
    });
    boardGame.save();
});

module.exports = router;
