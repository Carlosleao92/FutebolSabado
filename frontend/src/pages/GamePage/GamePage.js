import React, { Component } from 'react'
import DropDown from '../../components/DropDown/DropDown'
import GameInfo from '../../components/GameInfo/GameInfo'
import Spinner from '../../components/Spinner/Spinner';

export default class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: '',
            loading: true
        };
    }

    componentDidMount = async function () {
        if (this.props.match && this.props.match.params.id) {
            this.setState({loading: true});
            let game = await (await fetch(`http://localhost:5000/api/games/${this.props.match.params.id}`)).json();
            this.setState({
                loading: false,
                game: game
            })
        }
    }
    
    render() {
        let teams = this.state.game.teams;
        return (
            
            <div>
                {this.state.loading && <Spinner></Spinner>}
                {!this.state.loading && <GameInfo teamA={teams.slice(0,4)}  teamB={teams.slice(5,9)} score={this.state.score}></GameInfo>}
            </div>
        )
    }  
}