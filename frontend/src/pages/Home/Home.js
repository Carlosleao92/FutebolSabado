import React, { Component } from 'react'
import ScoreColumn from '../../components/ScoreColumn/ScoreColumn'
import NotificationColumn from '../../components/NotificationColumn/NotificationColumn'
import CardImageLeft from '../../components/CardImageLeft/CardImageLeft'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
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
                <div className="container">
                    <div className="row justify-content-around">
                        
                    </div>
                    <div className="row justify-content-around">
                        <div className='col-xl-4'>
                            <ScoreColumn accountList={latestSeason.accountDataList} />
                        </div>
                        <div className="col-xl-7">
                            <NotificationColumn></NotificationColumn>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}




