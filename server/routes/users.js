const express = require('express');
const router = express.Router();

const auth = require('./users/auth');
const register = require('./users/register');
const addBoardGameForm = require('./users/addactive/free/boardgame');

router.use('/auth', auth);
router.use('/register', register);
router.use('/addactive/free/boardgame', addBoardGameForm);
module.exports = router;
