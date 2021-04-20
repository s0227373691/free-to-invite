const { Active: ActiveModel } = require('../modules/active');

module.exports = {
    badminton: (req, res) => {
        const {
            startDate,
            endDate,
            title,
            place,
            nets,
            badmintonType,
            population,
            cost,
            content,
            selectedStrengthList,
        } = req.body;

        const activeModel = new ActiveModel({
            activeType: '羽球',
            startDate,
            endDate,
            title,
            place,
            population,
            cost,
            content,
            badmintonNets: nets,
            badmintonBrand: badmintonType,
            badmintonStrength: selectedStrengthList,
        });

        activeModel.save(function (err, result) {
            if (err) res.json({ stat: 'fail', message: err });
            else res.json({ stat: 'OK' });
        });
    },
    boardgame: (req, res) => {
        const {
<<<<<<< HEAD
            userName,
=======
>>>>>>> fd5e9a7a1c88632aa288d4a074336264d83bcf1c
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            addedBoardGameList,
        } = req.body;
        const activeModel = new ActiveModel({
<<<<<<< HEAD
            userName,
            activeType: '桌遊',
=======
            activeType: '籃球',
>>>>>>> fd5e9a7a1c88632aa288d4a074336264d83bcf1c
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            boardGameList: addedBoardGameList,
        });
        activeModel.save((err, result) => {
            if (err) res.json({ stat: 'fail', message: err });
            else res.json({ stat: 'OK' });
        });
    },
};
