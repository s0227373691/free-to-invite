const express = require('express');
const router = express.Router();

const newActiveControl = require('../controllers/newActiveControl');

router.post('/create/badminton', newActiveControl.badminton);
router.post('/create/boardgame', newActiveControl.boardgame);

module.exports = router;
