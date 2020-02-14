import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import ScoreColumn from '../../components/ScoreColumn/ScoreColumn'
import Spinner from '../../components/Spinner/Spinner'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            season: "",
            data: "",
            accounts: ""
        }
    }

    componentDidMount = async function () {
        let season = await (await fetch(`http://localhost:5000/api/seasons/latest`)).json();
        let data = await (await fetch(`http://localhost:5000/api/games/season/${season[0]._id}`)).json();
        let accounts = await (await fetch(`http://localhost:5000/api/accounts`)).json();
        this.setState({
            season: season,
            data: data,
            accounts: accounts
        })
    }

    render() {
        let data = this.state.data;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <HomeHeader message="This weeks match has ended!" score="9-2" id="086487" />
                    </div>
                    <div className='col-sm-3 card'>
                        <ScoreColumn accountList={data.accountDataList} />
                    </div>
                </div>
            </div>
        )
    }
}




