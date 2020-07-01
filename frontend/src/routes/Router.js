import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import TablePage from '../pages/TablePage'
import GamePage from '../pages/GamePage'
import PlayerPage from '../pages/PlayerPage'
import ArticlePage from '../pages/ArticlePage'

export default class Router extends Component {
    render() {

        return (
            <Switch>
                <Route exact path='/' render={() => <Home/>} />
                <Route exact path='/table' render={() => <TablePage/>}/>
                <Route exact path='/games/:id' render={() => <GamePage/>}/>
                <Route exact path='/articles/:id' render={routeProps => <ArticlePage {...routeProps}/>}/> 
                <Route exact path='/players/:id' render={() => <PlayerPage/>}/> 
            </Switch>
        )
    }
}

/*<Route exact path='/table' render={() => <ScoreTablePage seasons={data.seasons}/>} />
                <Route exact path='/games' render={(routeProps) => <GamePage {...routeProps} seasons={data.seasons}/>}/>
                <Route exact path='/games/:id' render={(routeProps) => <GamePage {...routeProps} seasons={data.seasons}/>}/>
                <Route exact path='/games/create' render={() => <h1>game create</h1>}/>
                <Route exact path='/players' render={() => <PlayersPage accounts={data.accounts} seasons={data.seasons}/>}/>
                <Route exact path='/players/create' render={() => <h1>player create</h1>}/>
                <Route exact path='/articles/:id' render={routeProps => <ArticleDetailsPage {...routeProps} articles={data.articles} />}/>*/
