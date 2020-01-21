import React, { Component } from 'react'

import SelectableListTable from '../SelectableListTable/SelectableListTable'

export default class GameInfo extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col col-md-3">
                    <h2>Team A</h2>
                    <SelectableListTable itemList={this.props.teamA} url={'/players/'}/>
                </div>
                <div className="col col-md-3">
                    <h3 className="display-4">{this.props.score}</h3>
                </div>
                <div className="col col-md-3">
                    <h2>Team B</h2>
                    <SelectableListTable itemList={this.props.teamB} url={'/players/'}/>
                </div>
            </div>
        </div>  
        )
    }
}
