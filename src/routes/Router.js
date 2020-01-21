import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import ArticlesPage from '../components/ArticlesPage/ArticlesPage'
import ScoreTablePage from '../components/ScoreTablePage/ScoreTablePage'
import ArticleDetailsPage from '../components/ArticleDetailsPage/ArticleDetailsPage'
import GamePage from '../components/GamePage/GamePage'
import PlayersPage from '../components/PlayersPage/PlayersPage'

export default class Router extends Component {
    
    render() {
        let data = this.props.data;
        let currentSeason = data.seasons.seasonList.filter(season => season.Id = data.seasons.currentSeasonId)[0]
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => <Home games={currentSeason.gameList}/>} />
                    <Route exact path='/table' render={() => <ScoreTablePage seasons={data.seasons}/>} />
                    <Route exact path='/games' render={() => <GamePage seasons={data.seasons}/>}/>
                    <Route exact path='/games/create' render={() => <h1>game create</h1>}/>
                    <Route exact path='/players' render={() => <PlayersPage accounts={data.accounts} seasons={data.seasons}/>}/>
                    <Route exact path='/players/create' render={() => <h1>player create</h1>}/>
                    <Route exact path='/articles' render={() => <ArticlesPage articles={data.articles}/>} /> 
                    <Route exact path='/articles/:id' render={routeProps => <ArticleDetailsPage {...routeProps} articles={data.articles} />}/>
                </Switch>
            </div>
        )
    }
}
