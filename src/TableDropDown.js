import React, { Component } from 'react'

export default class TableDropDown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSelection: ""
        }
        this.changeSelection = this.changeSelection.bind(this)
    }
    changeSelection(e) {
        this.setState({currentSelection: e.target.value});
        let currentSeasonId = this.props.seasons.filter(season => {return season.seasonName === e.target.value})[0].seasonId
        this.props.handleClick(currentSeasonId)
    }

    render() {
        let seasons = this.props.seasons;
        return (
            <div >
                <select 
                    className="custom-select" 
                    id="validationTooltip04" 
                    onChange={this.changeSelection} 
                    value={this.state.currentSelection}>
                <option disabled value="">Choose...</option>
                {seasons.map(season => <option value={season.SeasonId} key={season.seasonId}> {season.seasonName}</option>)}
            </select>
            </div>
        )
    }
}
