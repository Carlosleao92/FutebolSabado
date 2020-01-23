
let Account = require('../models/account.model');

class AccountDao {
    async getAllAccounts(req) {
        return Account.find();

    };

    async getAccountsById(req) {
        return Account.findById(req.params.id);

    }

    async addAccount(newAccount) {
        return newAccount.save();

    }

    async deleteAccount(req) {
        return Account.findByIdAndDelete(req.params.id);

    }

    async updateAccount(req) {
        return Account.updateOne(
            { _id: req.params.id },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
        )

    }
}

module.exports = new AccountDao();