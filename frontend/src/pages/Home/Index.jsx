import React, { Component } from 'react'
import HomeHeader from '../../components/layout/HomeHeader'
import GameSection from '../../components/layout/GameSection'
import './Home.css'

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
        for(let i=0; i<12; i++){
            monthArray[i] = [];
        }
        
        for (let game of latestSeason.seasonGameList) {
            let date = new Date (game.date);
            monthArray[date.getMonth()].push(game);
        }

        let thisMonth = new Date
        //thisMonth = thisMonth.getMonth();
        thisMonth = 4;
        
        let lastFourMonths = [];
        for (let i=0; i < 4; i++) {
            if (thisMonth - i > 0) {
                lastFourMonths[i] = monthArray[thisMonth - i -1];
            } else {
                lastFourMonths[i] = monthArray[12 - i];
            }
        }
        return lastFourMonths

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




