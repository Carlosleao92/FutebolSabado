import React from 'react'

export default function ScoreBoard(props) {

    const results = props.score.split("-");

    let className1 = "warning";
    let className2 = "warning";

    if (results[0] > results[1]) {
        className1 = "success"
        className2 = "danger"

    } else if(results[0] < results[1]) {
        className1 = "danger"
        className2 = "success"
    }


    return (
        <div className="row">
            <div className={`card-body bg-${className1}`}>
                {results[0]}
            </div>
            <div className={`card-body bg-${className2}`}>
                {results[1]}
            </div>
        </div>
    )
}
