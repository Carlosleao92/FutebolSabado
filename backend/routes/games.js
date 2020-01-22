const router = require('express').Router();
let Game = require('../models/game.model');

router.route('/').get((req, res) => {
    Game.find()
        .then(games => res.json(games))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/:id').get((req, res) => {
    Game.findById(req.params.id)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/add').post((req, res) => {
    const seasonId = req.body.seasonId;
    const date = req.body.date;
    const teams = req.body.teams;
    const score = req.body.score;

    const newGame = new Game({seasonId, date,  teams, score});

    newGame.save()
        .then(game => res.json('game added'))
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    Game.findByIdAndDelete(req.params.id)
        .then(() => {res.json('Game deleted.')})
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Game.findById(req.params.id)
        .then((game) => {
            game.seasonId = req.body.seasonId;
            game.date = req.body.date;
            game.teams = req.body.teams;
            game.score = req.body.score;

            game.save()
                .then(() => {res.json('Game Updated')})
                .catch(err => res.status(400).json('ERROR: ' + err))
        })
        .catch(err => res.status(400).json('ERROR: ' + err))
})

module.exports = router;


