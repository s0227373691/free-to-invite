const express = require('express');
const router = express.Router();

const auth = require('./users/auth');
const register = require('./users/register');

// TODO 休閒分類
const addBoardGameForm = require('./users/addactive/free/boardgame');
const addMovieForm = require('./users/addactive/free/movie');
const addConcertForm = require('./users/addactive/free/concert');
// TODO 運動分類
const addBasketballForm = require('./users/addactive/sport/basketball');
const addRunningForm = require('./users/addactive/sport/running');
const addFightingForm = require('./users/addactive/sport/fighting');

router.use('/auth', auth);
router.use('/register', register);
// TODO 休閒路由
router.use('/addactive/free/boardgame', addBoardGameForm);
router.use('/addactive/free/movie', addMovieForm);
router.use('/addactive/free/concert', addConcertForm);
// TODO 運動路由
router.use('/addactive/sport/basketball', addBasketballForm);
router.use('/addactive/sport/running', addRunningForm);
router.use('/addactive/sport/fighting', addFightingForm);

module.exports = router;
