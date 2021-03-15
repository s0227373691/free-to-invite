const express = require('express');
const router = express.Router();
const { Active } = require('../../modules/active');
router.get('/:num', (req, res) => {
    console.log(req.params.num);
    Active.find({ activeType: '羽球' })
        .skip(Number(req.params.num))
        .limit(Number(10))
        .then((data) => {
            res.json({ badmintonList: data });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
