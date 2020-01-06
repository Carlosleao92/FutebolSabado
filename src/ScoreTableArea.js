import React, { Component } from 'react'
import TableDropDown from './TableDropDown'
import ScoreTable from './ScoreTable'

export default class ScoreTableArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seasonSelected: ""
        }
        this.handleSeasonSelected = this.handleSeasonSelected.bind(this);
    }

    handleSeasonSelected(id) {
        this.setState({ seasonSelected: id });
    };

    render() {
        let season = this.props.players.seasons.filter(season => season.seasonId === this.state.seasonSelected)[0];
        let table = null;
        if (this.state.seasonSelected) {
            table = <ScoreTable season={season}></ScoreTable>
            console.log(season); 
        }
        return (
            <div>
                <div>
                    <h1>Results table</h1>
                    <TableDropDown seasons={this.props.players.seasons} currentSeason={this.props.currentSeason} handleClick={this.handleSeasonSelected}></TableDropDown>
                </div>
                {table}
            </div>
        )
    }
}
