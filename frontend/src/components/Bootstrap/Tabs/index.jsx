import React from 'react'
import {getFormattedDate} from '../../../utils/dateUtils'

export default function Tabs(props) {
    let games = props.games;
    let tabs = games && games.map((month, index) => {
        if (month && month.length > 0) {
            return (
                <li className="nav-item" key={month[0].date}>
                    <button className={`nav-link ${index === 0 && 'active'}`}>{getFormattedDate(month[0].date)}</button>
                </li>
            )
        }
    })

    return (
        <div className="container d-flex flex-row-reverse">
            <ul className="nav nav-tabs nav-justified">
                {tabs}
            </ul>
        </div>
    )
}
