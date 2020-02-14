import React, { Component } from 'react'
import { Data } from '../../data/data'
import ScoreCard from '../ScoreCard/ScoreCard'
import Spinner from '../Spinner/Spinner'


export default function ScoreColumn(props) {
    const accountList = props.accountList;

    const sortAccountList = function (accountList) {
        //sort by presences
        accountList.sort((accountA, accountB) => {
            return accountA.stats.presences - accountB.stats.presences
        });
        //sort by points
        accountList.sort(
            (accountA, accountB) => {
                return (-1) * (accountA.stats.points - accountB.stats.points)
            });
    }

    let scoreCardList;
    if (accountList) {
        sortAccountList(accountList)
        scoreCardList = accountList.map((account) =>
            <ScoreCard key={account.id} stats={account.stats} name={account.name} />)
    }
    
    if (scoreCardList) {
        return (
            <div className="score-column">
                <h4>Season Results:</h4>
                {scoreCardList}
            </div>)
    } else {
        return (
            <Spinner />
        )
    }
}
                
