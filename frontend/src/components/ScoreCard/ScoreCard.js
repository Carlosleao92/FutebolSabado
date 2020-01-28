import React, { Component } from 'react'

export default class ScoreCard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                {this.props.stats.points} {this.props.name} 
            </div>
        )
    }
}
