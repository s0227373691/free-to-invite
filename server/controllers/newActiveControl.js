const { Active: ActiveModel } = require('../modules/active');

module.exports = {
    badminton: (req, res) => {
        const {
            activeType,
            startDate,
            endDate,
            title,
            place,
            nets,
            badmintonType,
            population,
            cost,
            content,
        } = req.body;

        const activeModel = new ActiveModel({
            activeType,
            startDate,
            endDate,
            title,
            place,
            badmintonNets: nets,
            badmintonBrand: badmintonType,
            population,
            cost,
            content,
        });

        activeModel.save(function (err, result) {
            if (err) res.json({ stat: 'fail', message: err });
            else res.json({ stat: 'OK' });
        });
    },
};
