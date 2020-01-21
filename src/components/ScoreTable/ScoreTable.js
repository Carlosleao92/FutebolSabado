import React, { Component } from 'react'

export default class ScoreTable extends Component {
    render() {
        let season = this.props.season;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Appearances</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Points</th>
                    </tr>
                </thead>
                <tbody>
                {season.playerList.map((player) => 
                    <tr>
                    <th key={player.id} scope="row">{player.name}</th>
                        <td>{player.presences}</td>
                        <td>{player.wins}</td>
                        <td>{player.points}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}
