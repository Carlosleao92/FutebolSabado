import React, { Component } from 'react';
import ScoreColumn from '../ScoreColumn/ScoreColumn'

export default class Home extends Component {

    render() {
        let lastestGame = this.props.games[0];
        return (
            <div className="main-container container ">
                <div className="row justify-content-around">
                    <header className="col-sm-9">
                        <div className="jumbotron">
                            <h1 className="display-4">{lastestGame.score}</h1>
                            <p className="lead">This weeks match has ended!</p>
                            <hr className="my-4"></hr>
                            <p>Click here for more details!</p>
                            <a className="btn btn-primary btn-lg" href={`/games/${lastestGame.id}`} role="button">Lets Go</a>
                                
                        </div>
                    </header>

                    <div className="col-md-3">
                        <div>
                            <h4>Season Results:</h4>
                            <ScoreColumn></ScoreColumn>
                        </div>
                    </div>
                </div>
            </div>
                )
            }
        }


        