const express = require('express');
const router = express.Router();

const boardGame = require('./boardgame');

router.use('/boardgame', boardGame);

module.exports = router;
