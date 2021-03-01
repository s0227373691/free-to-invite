const express = require('express');
const router = express.Router();

const boardControl = require('../controllers/boardControl');

router.get('/sport/badminton', boardControl.badminton);
router.get('/sport/basketball', boardControl.basketball);
router.get('/entertainment/boardgame', boardControl.boardgame);

module.exports = router;
