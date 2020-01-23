const router = require('express').Router();
let Game = require('../models/game.model');
let GameBusiness = require('../business/gameBusiness')


router.route('/').get((req, res) => {
    GameBusiness.getAllGames(req, res);
});

router.route('/:id').get((req, res) => {
    GameBusiness.getGamesById(req, res);
});

//get Game By Account Id
router.route('/account/:id').get((req, res) => {
    GameBusiness.getGamesByAccountId(req, res);
});

//get Game By Season Id
router.route('/season/:id').get((req, res) => {
    GameBusiness.getGamesBySeasonId(req, res);
});

router.route('/add').post((req, res) => {
    GameBusiness.addGame(req, res);
})

router.route('/delete/:id').delete((req, res) => {
    GameBusiness.deleteGame(req, res);
})

router.route('/update/:id').post((req, res) => {
    GameBusiness.updateGame(req, res);
})

module.exports = router;


