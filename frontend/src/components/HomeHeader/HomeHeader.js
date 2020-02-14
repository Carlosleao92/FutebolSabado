import React from 'react'

export default function HomeHeader(props) {
    return (
        <header>
            <div className="jumbotron">
                <h1 className="display-4">{props.score}</h1>
                <p className="lead">{props.message}</p>
                <hr className="my-4"></hr>
                <p>Click here for more details!</p>
                <a className="btn btn-primary btn-lg" href={`/games/${props.id}`} role="button">Lets Go</a>
            </div>
                    </header>
    )
}
