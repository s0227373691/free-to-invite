const express = require('express');
const router = express.Router();

const auth = require('./auth');
const register = require('./register');
const logout = require('./logout');

router.use('/auth', auth);
router.use('/register', register);
router.use('/logout', logout);

module.exports = router;
