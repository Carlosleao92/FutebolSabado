import React, { Component } from 'react'
import { Data } from '../../data/data'
import ScoreCard from '../ScoreCard/ScoreCard'
import Spinner from '../Spinner/Spinner'
import './ScoreColumn.css'


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
        sortAccountList(accountList);
        scoreCardList = accountList.slice(0,10).map((account, index) =>
        <div  key={account.id}  className="row mb-2">
            <ScoreCard
                type={index < 1 ? "golden" : "bg-dark"} 
                key={account.id} 
                stats={account.stats} 
                firstName={account.firstName} 
                lastName={account.lastName}
            />
        </div>)
    }
    
    if (scoreCardList) {
        return (
            <div className="score-column">
                <h2 className="score-column-title">LEAGUE TABLE</h2>
                {scoreCardList}
            </div>)
    } else {
        return (
            <Spinner />
        )
    }
}
                
