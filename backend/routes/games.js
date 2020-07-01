const router = require('express').Router();
let Game = require('../models/game.model');
let GameBusiness = require('../business/gameBusiness')


router.route('/').get((req, res) => {
    GameBusiness.getAllGames()
        .then(game => { res.json(game) })
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/:id').get((req, res) => {
    GameBusiness.getGamesById(req.params.id)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//gets all games and stats of the Account Id (organized by season)
router.route('/account/:id').get((req, res) => {
    GameBusiness.getAccountGameHistory(req.params.id)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

//get all games and stats of the season Id (organized by player)
router.route('/season/:id').get((req, res) => {
    GameBusiness.getSeasonGameHistory(req.params.id)
        .then(game => res.json(game))
        .catch(err => res.status(400).json('ERROR: ' + err));
});

router.route('/add').post((req, res) => {
    GameBusiness.addGame(req)
        .then(() => res.json('Game added'))
        .catch(err => res.status(400).json('ERROR: ' + err));
})

router.route('/delete/:id').delete((req, res) => {
    GameBusiness.deleteGame(req.params.id)
        .then(() => { res.json('Game deleted.') })
        .catch(err => res.status(400).json('ERROR: ' + err));
})

router.route('/update/:id').post((req, res) => {
    GameBusiness.updateGame(req)
        .then(() => { res.json('Game Updated') })
        .catch(err => res.status(400).json('ERROR: ' + err));
})

module.exports = router;


