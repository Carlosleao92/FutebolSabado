import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import ArticleArea from './ArticleArea'
import ScoreTableArea from './ScoreTableArea'
import ArticleDetails from './ArticleDetails'
import GameArea from './GameArea'

export default class Router extends Component {
    
    render() {
        let data = this.props.data;
        let currentSeason = data.seasons.seasonList.filter(season => season.Id = data.seasons.currentSeasonId)[0]
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => <Home games={currentSeason.gameList}/>} />
                    <Route exact path='/table' render={() => <ScoreTableArea seasons={data.seasons}/>} />
                    <Route exact path='/games' render={() => <GameArea seasons={data.seasons}/>}/>
                    <Route exact path='/games/create' render={() => <h1>game create</h1>}/>
                    <Route exact path='/players' render={() => <h1>player list</h1>}/>
                    <Route exact path='/players/:id' render={() => <h1>player id</h1>}/>
                    <Route exact path='/players/create' render={() => <h1>player create</h1>}/>
                    <Route exact path='/articles' render={() => <ArticleArea articles={data.articles}/>} /> 
                    <Route exact path='/articles/:id' render={routeProps => <ArticleDetails {...routeProps} articles={data.articles} />}/>
                </Switch>
                
            </div>
        )
    }
}
