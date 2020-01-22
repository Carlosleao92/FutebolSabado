const router = require('express').Router();
let Account = require('../models/account.model');

router.route('/').get((req, res) => {
    Account.find()
    .then(accounts => res.json(accounts))
    .catch(err => res.status(400).jsom('ERROR: ' + err))
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const id = req.body.id;
    const latestSeasonId = req.body.latestSeasonId;
    const playerIdList = req.body.playerIdList;

    const newAccount = new Account({firstName, lastName, id, latestSeasonId, playerIdList})
    newAccount.save()
    .then(accounts => res.json('user added'))
    .catch(err => res.status(400).json('ERROR: ' + err))
})

module.exports = router;