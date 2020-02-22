import React from 'react'
import Tabs from '../../Bootstrap/Tabs'
import GameCard from '../../Bootstrap/GameCard'

export default function GameSection(props) {

    return (
        <div>
            <Tabs games={props.games}/>
            <div className="card text-center container">
                <div className="card-header">
                    Our Featured Games
                </div>
                <GameCard status="open"/>
                <GameCard status="cancelled"/>
                <GameCard status="closed"/>
            </div>
        </div>
    )
}
