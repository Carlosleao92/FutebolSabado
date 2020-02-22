import React from 'react'
import Tabs from '../../Bootstrap/Tabs'
import GameCard from '../../Bootstrap/GameCard'
import { getFormattedMonth } from '../../../utils/dateUtils'

export default function GameSection(props) {
    const { games } = props;

    const [selectedMonth, setSelectedMonth] = React.useState(0);
    const [showGames, setShowGames] = React.useState(true);

    const tabLabels = games && games.map((month) => {
        if (month && month.length > 0) {
            return getFormattedMonth(month[0].date);
        }
    })

    const gameCards = games && games[selectedMonth].map((game) =>
        <GameCard status="closed" teams={game.teams} creationDate={game.createdAt} gameDate={game.date} score={game.score} />
    );

    const handleMonthChange = (e) => {
        setSelectedMonth(parseInt(e.target.value));
    }

    const handleShowGamesToggle = (e) => {
        showGames ? setShowGames(false) : setShowGames(true);
    }

    return (
        <div>
            <div className="container d-flex flex-row-reverse">
                <Tabs labels={tabLabels} onClick={handleMonthChange} selectedTab={selectedMonth} />
            </div>
            <div className="card text-center container">
                <div className="card-header" onClick={handleShowGamesToggle}>
                    Our Featured Games
                </div>
                {showGames && gameCards}
            </div>
        </div>
    )
}
