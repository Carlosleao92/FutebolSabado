class SeasonMapper {

    mapAccountInfoToLatestSeason(accounts, latestSeason) {
        for (let accountInLatestSeason of latestSeason.accountDataList) {
            for (let account of accounts) {
                
                if (account._id == accountInLatestSeason.id) {
                    accountInLatestSeason.firstName = account.firstName;
                    accountInLatestSeason.lastName = account.lastName;
                }
            }
        }
    }

}

module.exports = new SeasonMapper();