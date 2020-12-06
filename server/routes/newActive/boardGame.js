const express = require('express');
const router = express.Router();

const { BoardGame } = require('../../modules/newActive/boardGame');

router.post('/', (req, res) => {
    const {
<<<<<<< HEAD:server/routes/users/addActive/free/boardgame.js
        minorType,
=======
        activeType,
>>>>>>> 15ddf1cd4dc7b912279bb5939270b50aad926fc4:server/routes/newActive/boardGame.js
        date,
        population,
        precautions,
        boardGameType,
        title,
        content,
    } = req.body;

<<<<<<< HEAD:server/routes/users/addActive/free/boardgame.js
    const boardgame = new Boardgame({
        minorType,
=======
    const boardGame = new BoardGame({
        activeType,
>>>>>>> 15ddf1cd4dc7b912279bb5939270b50aad926fc4:server/routes/newActive/boardGame.js
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
