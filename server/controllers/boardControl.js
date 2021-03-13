const { Badminton: badmintonModel } = require('../modules/newActive/badminton');
const {
    Basketball: basketballModel,
} = require('../modules/newActive/basketball');
const { BoardGame: boardGameModel } = require('../modules/newActive/boardGame');

module.exports = {
    badminton: (req, res) => {
        badmintonModel
            .find()
            .then((activeList) =>
                res.json({ stat: 'OK', type: '羽球', data: activeList })
            )
            .catch((err) => res.json({ stat: 'failed', message: err }));
    },
    basketball: (req, res) => {
        basketballModel
            .find()
            .then((activeList) =>
                res.json({ stat: 'OK', type: '籃球', data: activeList })
            )
            .catch((err) => res.json({ stat: 'failed', message: err }));
    },
    boardgame: (req, res) => {
        boardGameModel
            .find()
            .then((activeList) =>
                res.json({ stat: 'OK', type: '桌遊', data: activeList })
            )
            .catch((err) => res.json({ stat: 'failed', message: err }));
    },
};
