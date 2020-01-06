import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ArticleDetails extends Component {
    render() {
        let articles = this.props.articles
        let article = articles.filter(obj => obj.id == this.props.match.params.id)[0];
        console.log(article)
        return (
            <div>
                <div>
                    <div>
                        {article.img}
                    </div>
                    <div>
                        {article.title}
                    </div>
                    <div>
                        {article.description}
                    </div>
                    <div>
                        {article.text}
                    </div>
                </div>
            <button 
                onClick={this.props.history.goBack}
                className="btn btn-dark"
                >Go Back!
            </button>
            </div>
            
        )
    }
}
