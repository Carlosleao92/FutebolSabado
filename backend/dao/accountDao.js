
let Account = require('../models/account.model');

class AccountDao {
    async getAllAccounts(req, res) {
        return Account.find()
        .then(accounts => res.json(accounts))
        .catch(err => res.status(400).json('ERROR: ' + err));
    };

    async getAccountsById(req, res) {
        return Account.findById(req.params.id)
        .then(account => res.json(account))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async addAccount(newAccount, res) {
        return newAccount.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async deleteAccount(req, res) {
        return Account.findByIdAndDelete(req.params.id)
        .then(() => {res.json('Account deleted.')})
        .catch(err => res.status(400).json('ERROR: ' + err))
    }

    async updateAccount(req, res) {
        return Account.updateOne(
            {_id:req.params.id},
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
        )
        .then(() => {res.json('Account Updated')})
        .catch(err => res.status(400).json('ERROR: ' + err))
    }
}

module.exports = new AccountDao();