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

    componentDidMount = async function () {
        let latestSeason = await (await fetch(`http://localhost:5000/api/seasons/latest`)).json();
        this.setState({
            latestSeason: latestSeason
        })
    }

    render() {
        let latestSeason = this.state.latestSeason;
        let latestGameId = latestSeason ? latestSeason.seasonGameList[0]._id : "/ "
        return (
            <div className="home">
                <HomeHeader latestGameId={latestGameId}></HomeHeader>
                <GameSection/>
            </div>

        )
    }
}




