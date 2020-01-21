import React, { Component } from 'react'
import DropDown from '../DropDown/DropDown'
import ScoreTable from '../ScoreTable/ScoreTable'

export default class ScoreTablePage extends Component {
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
        let season = this.props.seasons.seasonList.filter(season => season.id === this.state.seasonSelected)[0];
        let table = null;
        if (this.state.seasonSelected) {
            table = <ScoreTable season={season}></ScoreTable>
            console.log(season); 
        }
        return (
            <div>
                <div>
                    <h1 className="area-title">Results table</h1>
                    <DropDown options={this.props.seasons.seasonList} handleClick={this.handleSeasonSelected}></DropDown>
                </div>
                {table}
            </div>
        )
    }
}
