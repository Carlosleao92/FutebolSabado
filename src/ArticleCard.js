import React, { Component } from 'react'
import articleImg from './img/match.jpg'
import './ArticleCard.css'

export default class ArticleCard extends Component {
    render() {
        let article = this.props.article;
        return (
            <div className="col-sm-6 article-card">
                <div className="card">
                    <img src={articleImg} className="card-img-top" alt="articleImg"/>
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description}</p>
                            <a href={`/articles/${article.id}`} className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
            
        )
    }
}
