const express = require('express');
const router = express.Router();

const boardGame = require('./boardgame');
const badminton = require('./badminton');

router.use('/boardgame', boardGame);
router.use('/badminton', badminton);
module.exports = router;
