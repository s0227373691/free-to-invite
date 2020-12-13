const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy();
    res.send({
        loggedIn: false,
    });
});

module.exports = router;
