import React, { Component } from 'react'
import {Data} from '../../data/data'
import ScoreCard from '../ScoreCard/ScoreCard'
export default class ScoreColumn extends Component {
    constructor(props) {
        super(props)
        this.state = {data: {accountDataList:[]}}
    }

    async componentDidMount () {
        let season = await (await fetch(`http://localhost:5000/api/seasons/latest`)).json();
        let data = await (await fetch(`http://localhost:5000/api/games/season/${season[0]._id}`)).json();
        let accounts = await (await fetch(`http://localhost:5000/api/accounts`)).json();
        this.setState({
            season: season, 
            data: data, 
            accounts:accounts});
    }
    
    render() {
        let data = this.state.data;
        if(data.accountDataList) {
            data.accountDataList.sort((accountA, accountB)=> {return accountA.stats.presences - accountB.stats.presences});
            data.accountDataList.sort((accountA, accountB)=> {return (-1)*(accountA.stats.points - accountB.stats.points)});
            data.accountDataList.map((accountData)=> {
                this.state.accounts.map((account) => {
                    if (account._id === accountData.id) {
                        accountData.name = `${account.firstName} ${account.lastName}`;
                    }
                })
            })
        }

        return (
            <div>
                { data.accountDataList.map((account)=> <ScoreCard key={account.id} stats={account.stats} name={account.name}/>)}
            </div>
        )
    }
}
