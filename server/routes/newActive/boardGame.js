const express = require('express');
const router = express.Router();

const { BoardGame } = require('../../modules/newActive/boardGame');

router.post('/', (req, res) => {
    const {
        activeType,
        startDate,
        endDate,
        title,
        population,
        cost,
        content,
        addedBoardGameList,
        place,
    } = req.body;

    const boardGame = new BoardGame({
        activeType,
        startDate,
        endDate,
        title,
        population,
        cost,
        content,
        addedBoardGameList,
        place,
    });
    boardGame.save();
});

module.exports = router;
