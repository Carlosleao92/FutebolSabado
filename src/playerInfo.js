import React, { Component } from 'react'

export default class playerInfo extends Component {
    render() {
        let player = this.props.player;
        return (
            <div>
                <div>
                    {player.name}
                </div>
                <div>
                    {player.wins}
                </div>
                <div>
                    {player.presences}
                </div>
                <div>
                    {player.points}
                </div>
            </div>
        )
    }
}
