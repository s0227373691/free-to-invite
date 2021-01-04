const express = require('express');
const router = express.Router();

const boardGame = require('./boardGame');
const concert = require('./concert');
const movie = require('./movie');
const basketball = require('./basketball');
const running = require('./running');
const fighting = require('./fighting');
const badminton = require('./badminton');

router.use('/boardgame', boardGame);
router.use('/concert', concert);
router.use('/movie', movie);
router.use('/basketball', basketball);
router.use('/running', running);
router.use('/fighting', fighting);
router.use('/badminton', badminton);

module.exports = router;
