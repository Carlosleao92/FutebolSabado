import React from 'react'
import ScoreBoard from '../ScoreBoard'
import {getSimplifiedDate} from '../../../utils/dateUtils'

export const GAME_STATUS_CLOSED = "closed"
export const GAME_STATUS_OPEN = "open"
export const GAME_STATUS_CANCELLED = "cancelled"

export default function GameCardMessage(props) {

    const {status, isFull, onClick} = props;

    return (
        <div className="col">
            <h5 className="card-title">Inatel Arena</h5>
            <p className="card-text">{status === GAME_STATUS_CANCELLED ? `GAME CANCELED`:`Day ${getSimplifiedDate(props.gameDate)} at 09:00`}</p>
            {status === GAME_STATUS_OPEN && <button className={`btn btn-${isFull ? 'secondary' : 'primary'}`} onClick={onClick}>Sign me</button> }
            {status === GAME_STATUS_CLOSED && <ScoreBoard score={props.score}/> }
        </div>
    )
}
