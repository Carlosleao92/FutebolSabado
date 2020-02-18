import React from 'react'
import './CardImageLeft.css'

export default function CardImageLeft() {
    return (
        <div className="card text-white mb-3" style={{ 'maxWidth': '1000px'}}>
            <div className="row mb-0 no-gutters">
                <div className="col-md-6">
                    <img src="https://www.liveabout.com/thmb/jiteuiQXHmVGM5D70_MktD8Amoc=/3044x2276/filters:no_upscale():max_bytes(150000):strip_icc()/451274454-56aa3b305f9b58b7d002be61.jpg" className="card-img" alt="Soccer Image"></img>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">New Game</h5>
                        <p className="card-text">The inscriptions for the next game have started</p>
                        <p className="card-text muted-text"><small className="text-muted">Be the first to make a presence</small></p>
                        <button className="btn btn-primary btn-sm">Sign me in</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
