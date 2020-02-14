import React from 'react'
import './HomeHeader.css'

export default function HomeHeader(props) {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">{props.score}</h1>
                <p className="lead">{props.message}</p>
                <hr className="my-4"></hr>
                <p className="  ">Click here for more details!</p>
                <a className="btn btn-primary btn-lg" href={`/games/${props.id}`} role="button">Lets Go</a>
            </div>
        </div>
    )
}
