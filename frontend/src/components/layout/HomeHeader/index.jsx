import React from 'react'
import './HomeHeader.css'

export default function HomeHeader(props) {
    return (
        <div>
            <header className="home-header">
                    <div className="header-div text-white">
                        <h1>Futebol ao Sabado</h1>
                        <div className="header-button-area">
                        <a href={`/games/${props.latestGameId}`}>
                            <button type="button" className="btn btn-primary btn-lg">Latest Game</button>
                        </a>
                            
                            <button type="button" className="btn btn-outline-secondary btn-lg">Latest Article</button>
                        </div>
                    </div>
                </header>
        </div>
    )
}
