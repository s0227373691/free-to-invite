const express = require('express');
const router = express.Router();
const { Badminton } = require('../../modules/newActive/badminton');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    Badminton.find({})
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ badmintonList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
