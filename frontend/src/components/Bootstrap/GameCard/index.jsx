import React from 'react'
import GameCardMessage, { GAME_STATUS_CANCELLED } from '../GameCardMessage'
import TeamList from '../TeamList'

export default function GameCard(props) {

    const status = props.status;
    return (
        <React.Fragment>
            <div className="card text-center container">
                <div className="card-body">
                    <div className="row">
                        <div className="col d-none d-sm-block">
                            {GAME_STATUS_CANCELLED !== status && <TeamList />}
                        </div>
                        <div className="col">
                            <GameCardMessage status={status} />
                        </div>
                        <div className="col d-none d-sm-block">
                            {GAME_STATUS_CANCELLED !== status && <TeamList />}
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
            </div>
            </div>
        </React.Fragment>
    )
}
