import React from 'react'
import './ScoreCard.css'

export default function ScoreCard(props) {
    let { stats, firstName, lastName } = props;
    let type = props.type || "dark";
    return (
        <div className={`col text-white`}>
            <div className="row align-items-center mb-0 ">
                <div className="col-11 h-100 purple">
                    <div>
                        <p>{`${firstName} ${lastName.toUpperCase()}`}</p>
                    </div>
                </div>
                <div className="col-1 align-center pink">
                    <p>{Math.round(stats.points)}</p>
                </div>
            </div>
        </div >
    )
}

