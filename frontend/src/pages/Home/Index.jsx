import React, { Component } from 'react'
import HomeHeader from '../../components/layout/HomeHeader'
import GameSection from '../../components/layout/GameSection'
import './Home.css'
import { NUMBER_OF_MONTHS } from '../../utils/dateUtils'


const MAX_NUMBER_OF_TABS = 4;

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latestSeason: ""
        }
    }

    organizeGamesByMonth = (latestSeason) => {

        //ARRAY WITH ALL GAMES BY MONTH
        let monthArray = [];
        for (let i = 0; i < NUMBER_OF_MONTHS; i++) {
            monthArray[i] = [];
        }
        // ADD GAMES IN THE MONTH INDEX
        for (let game of latestSeason.seasonGameList) {
            let date = new Date(game.date);
            monthArray[date.getMonth()].push(game);
        }
        //TODAYs DATE
        let today = new Date
        // TODO remove comment below
        //currentMonth = today.getMonth();
        let currentMonth = 4;

        //GET THE LAST 4 MONTHS THAT HAD GAMES 
        let lastFourMonths = [];
        let index = 0;

        for (let i = 0; i < MAX_NUMBER_OF_TABS; i++) {
            if (currentMonth - i > 0 && monthArray[currentMonth - i - 1].length > 0) {
                lastFourMonths[index] = monthArray[currentMonth - i - 1];
                index++;
            } else if (monthArray[NUMBER_OF_MONTHS - i].length > 0) {
                lastFourMonths[index] = monthArray[NUMBER_OF_MONTHS - i];
                index++;
            }
        }
        return lastFourMonths.filter((entry) => { return entry })
    }

    componentDidMount = async function () {
        try {
            let latestSeason = await (await fetch(`http://localhost:5000/api/seasons/latest`)).json();
            let latestFourMonths = this.organizeGamesByMonth(latestSeason)
            this.setState({
                latestSeason: latestSeason,
                latestFourMonths: latestFourMonths
            })
        } catch {
            console.log("ERROR");
        }
    }

    render() {
        let latestSeason = this.state.latestSeason;
        let latestGameId = latestSeason ? latestSeason.seasonGameList[0]._id : "/ "
        return (
            <div className="home">
                <HomeHeader latestGameId={latestGameId}></HomeHeader>
                <GameSection games={this.state.latestFourMonths} />
            </div>

        )
    }
}




