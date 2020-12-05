const express = require('express');
const router = express.Router();

const { BoardGame } = require('../../modules/newActive/boardGame');

router.post('/', (req, res) => {
    const {
        activeType,
        date,
        population,
        precautions,
        boardGameType,
        title,
        content,
    } = req.body;

    const boardGame = new BoardGame({
        activeType,
        date,
        population,
        precautions,
        boardGameType,
        title,
        content,
    });
    boardGame.save();
});

module.exports = router;
