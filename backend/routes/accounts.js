const router = require('express').Router();
let Account = require('../models/account.model');

router.route('/').get((req, res) => {
    Account.find()
        .then(accounts => res.json(accounts))
        .catch(err => res.status(400).json('ERROR: ' + err))
});

router.route('/:id').get((req, res) => {
    Account.findById(req.params.id)
        .then(account => res.json(account))
        .catch(err => res.status(400).json('ERROR: ' + err))
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

router.route('/delete/:id').delete((req, res) => {
    Account.findByIdAndDelete(req.params.id)
        .then(() => {res.json('Account deleted.')})
        .catch(err => res.status(400).json('ERROR: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Account.findById(req.params.id)
        .then((account) => {
            account.firstName = req.body.firstName;
            account.lastName = req.body.lastName;
            account.id = req.body.id;
            account.latestSeasonId = req.body.latestSeasonId;
            account.playerIdList = req.body.playerIdList;

            account.save()
                .then(() => {res.json('Account Updated')})
                .catch(err => res.status(400).json('ERROR: ' + err))
        })
        .catch(err => res.status(400).json('ERROR: ' + err))
})

module.exports = router;