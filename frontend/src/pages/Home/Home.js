import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import ScoreColumn from '../../components/ScoreColumn/ScoreColumn'
import CardImageLeft from '../../components/CardImageLeft/CardImageLeft'
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
        return (
            <div className="home">
                <header className="home-header">
                    <div className="main-new" >
                                <CardImageLeft></CardImageLeft>
                    </div>

                </header>
                <div className="w-100 home-container">
                    <div className="row">
                        <div className=" col-sm-6">
                            <div className="new">
                                {false &&  <HomeHeader message="This weeks match has ended!" score="9-2" id="086487" />}
                            </div>
                        </div>
                        <div className='col-md-3 '>
                            <div className='score-column' >
                                <ScoreColumn accountList={latestSeason.accountDataList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}




