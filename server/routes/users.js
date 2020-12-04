const express = require('express');
const router = express.Router();

const auth = require('./users/auth');
const register = require('./users/register');
const addActiveFree = require('./users/addactive/free');

router.use('/auth', auth);
router.use('/register', register);
router.use('/addactive/free', addActiveFree);
module.exports = router;
