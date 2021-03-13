const express = require('express');
const router = express.Router();
const { Running } = require('../../modules/newActive/running');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    Running.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ runningList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
