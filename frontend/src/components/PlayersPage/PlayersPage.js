import React, { Component } from 'react'
import DropDown from "../DropDown/DropDown"
import PlayerInfo from "../PlayerInfo/PlayerInfo"

export default class PlayersPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectedAccountId: "",
            selectedSeasonId: ""
        }
        this.handleAccountSelection = this.handleAccountSelection.bind(this);
        this.handleSeasonSelection = this.handleSeasonSelection.bind(this);
    }

    handleAccountSelection(id) {
        this.setState({selectedAccountId: id});
    }
    handleSeasonSelection(id) {
        this.setState({selectedSeasonId: id});
    }

    filterPlayerByAccountId(season) {
        return season.playerList.filter(player => player.accountId ===  this.state.selectedAccountId);
    }
    getSelectedPlayerSeasonInfo(seasonList) {
        return this.filterPlayerByAccountId(seasonList.filter(season => season.id === this.state.selectedSeasonId)[0])[0];
    }
    
    render() {
        let seasonDropDown;
        let playerInfo;
        if (this.state.selectedAccountId) {
            let seasonsWithAppearances = this.props.seasons.seasonList.filter((season) => this.filterPlayerByAccountId(season).length > 0);
            seasonDropDown = <DropDown options={seasonsWithAppearances} defaultText="Choose the season" handleClick={this.handleSeasonSelection}/>

            if (this.state.selectedSeasonId) {
                let player = this.getSelectedPlayerSeasonInfo(seasonsWithAppearances);
                playerInfo = <PlayerInfo player={player}></PlayerInfo>
            }
        }
        
        return (
            <div>
                <DropDown options={this.props.accounts.accountList} defaultText="Choose the player" handleClick={this.handleAccountSelection}/>
                {seasonDropDown}
                {playerInfo}
            </div>
            
        )
    }
}
