import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage'
import ScoreTablePage from '../pages/ScoreTablePage/ScoreTablePage'
import ArticleDetailsPage from '../pages/ArticleDetailsPage/ArticleDetailsPage'
import GamePage from '../pages/GamePage/GamePage'
import PlayersPage from '../pages/PlayersPage/PlayersPage'


export default class Router extends Component {
    
    render() {
        //TODO Remove data
        let data = this.props.data;
        let currentSeason = data.seasons.seasonList.filter(season => season.Id = data.seasons.currentSeasonId)[0]
        //
        return (
            <Switch>
                <Route exact path='/' render={() => <Home/>} /> 
                <Route exact path='/table' render={() => <ScoreTablePage seasons={data.seasons}/>} />
                <Route exact path='/games' render={() => <GamePage seasons={data.seasons}/>}/>
                <Route exact path='/games/create' render={() => <h1>game create</h1>}/>
                <Route exact path='/players' render={() => <PlayersPage accounts={data.accounts} seasons={data.seasons}/>}/>
                <Route exact path='/players/create' render={() => <h1>player create</h1>}/>
                <Route exact path='/articles' render={() => <ArticlesPage articles={data.articles}/>} /> 
                <Route exact path='/articles/:id' render={routeProps => <ArticleDetailsPage {...routeProps} articles={data.articles} />}/>
            </Switch>
        )
    }
}
