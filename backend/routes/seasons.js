const router = require('express').Router();
let SeasonBusiness = require('../business/seasonBusiness')
let Season = require('../models/season.model');

router.route('/').get((req, res) => {
    SeasonBusiness.getAllSeasons(req, res);
});

router.route('/:id').get((req, res) => {
    SeasonBusiness.getSeasonsById(req, res);
});

router.route('/add').post((req, res) => {
    SeasonBusiness.addSeason(req, res);
})

router.route('/delete/:id').delete((req, res) => {
    SeasonBusiness.deleteSeason(req, res);
})

router.route('/update/:id').post((req, res) => {
    SeasonBusiness.updateSeason(req, res);
})

module.exports = router;