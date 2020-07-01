import React from 'react'

export default function TeamList(props) {
    const listOfPlayers = props.teams.map((player) =>
    <li className="list-group-item">{player}</li>
    )
    return (
        <ul className="list-group list-group-flush">
            {listOfPlayers}
        </ul>
    )
}
