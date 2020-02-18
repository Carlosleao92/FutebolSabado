import React, { Component } from 'react'
import DropDown from '../../components/DropDown/DropDown'
import GameInfo from '../../components/GameInfo/GameInfo'

export default class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasonSelected: "",
            gameSelected: ""
        };
        this.handleSeasonSelected = this.handleSeasonSelected.bind(this);
        this.handleGameSelected = this.handleGameSelected.bind(this);
    }
    //TODO MAKE this handlers one dynamic method
    handleSeasonSelected(id) {
        this.setState({ seasonSelected: id, gameSelected: ""});
    };

    handleGameSelected(id) {
        this.setState({ gameSelected: id });
    };

    getSelectedSeasonData() {
        return this.props.seasons.seasonList.filter(season => season.id == this.state.seasonSelected)[0];
    };

    getSelectedGameData() {
        return this.props.seasons.seasonList
        .filter(season => season.id == this.state.seasonSelected)[0].gameList
        .filter((game) => game.id == this.state.gameSelected)[0];
    };

    getSelectedGamePlayerData(selectedGameTeamIds) {
        return this.getSelectedSeasonData().playerList.filter((player) => selectedGameTeamIds.includes(player.id))
    }
    
    render() {
        let gameDropDown = null;
        let gameInfo = null;
        
        if (this.state.seasonSelected) {
            let selectedSeasonData = this.getSelectedSeasonData();

            gameDropDown = <div><DropDown options={selectedSeasonData.gameList} handleClick={this.handleGameSelected} defaultText="Choose the Game"/></div>;

            if (this.state.gameSelected) {

                let selectedGameData = this.getSelectedGameData();

                let teamA = this.getSelectedGamePlayerData(selectedGameData.teams[0])
                let teamB = this.getSelectedGamePlayerData(selectedGameData.teams[1])

                gameInfo = <GameInfo teamA={teamA} score={selectedGameData.score} teamB={teamB}/>
            }
        }
        return (
            <div>
                <div>
                    <DropDown options={this.props.seasons.seasonList} handleClick={this.handleSeasonSelected}  defaultText="Choose the Season"></DropDown>
                </div>
                <div>
                    {gameDropDown}
                </div>
                    {gameInfo}
            </div>
        )
    }  
}