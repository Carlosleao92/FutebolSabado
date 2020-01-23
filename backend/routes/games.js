const router = require('express').Router();
let Game = require('../models/game.model');
let GameBusiness = require('../business/gameBusiness')


router.route('/').get((req, res) => {
    GameBusiness.getAllGames(req)
        .then(game => { res.json(game) })
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/:id').get((req, res) => {
    GameBusiness.getGamesById(req)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//get Game By Account Id
router.route('/account/:id').get((req, res) => {
    GameBusiness.getGamesByAccountId(req)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//get Game By Season Id
router.route('/season/:id').get((req, res) => {
    GameBusiness.getGamesBySeasonId(req)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/add').post((req, res) => {
    GameBusiness.addGame(req)
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('ERROR: ' + err));
})

router.route('/delete/:id').delete((req, res) => {
    GameBusiness.deleteGame(req)
        .then(() => { res.json('Game deleted.') })
        .catch(err => res.status(400).json('ERROR: ' + err));
})

router.route('/update/:id').post((req, res) => {
    GameBusiness.updateGame(req)
        .then(() => { res.json('Game Updated') })
        .catch(err => res.status(400).json('ERROR: ' + err));
})

module.exports = router;


