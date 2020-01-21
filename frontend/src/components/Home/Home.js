import React, { Component } from 'react';


export default class Home extends Component {

    render() {
        let lastestGame = this.props.games[0];
        return (
            <div >
                <header>
                    <div className="jumbotron">
                        <h1 className="display-4">{lastestGame.score}</h1>
                        <p className="lead">This weeks match has ended!</p>
                        <hr className="my-4"></hr>
                        <p>Click here for more details!</p>
                        <a className="btn btn-primary btn-lg" href={`/games/${lastestGame.id}`} role="button">Lets Go</a>
                            
                    </div>
                </header>
            </div>
                )
            }
        }


        