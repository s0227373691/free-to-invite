const express = require('express');
const router = express.Router();
const _ = require('lodash');

// const { NewArticle } = require('../modules/newArticle');

router.get('/', (req, res) => {
    res.send('newArticle');
});

module.exports = router;
