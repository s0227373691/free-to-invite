const express = require('express');
const router = express.Router();

const boardGame = require('./boardGame');

router.use('/boardgame', boardGame);

module.exports = router;
