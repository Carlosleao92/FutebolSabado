import React, { Component } from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import './ArticlesPage.css'

export default class ArticlesPage extends Component {
    constructor(props) {
        super(props);
        //defaultProps = {articleNumber: undefined}
        this.add = this.add.bind(this);
    }

    add () {
        let number = this.state.articleNumber +1;
        this.setState({articleNumber: number});
    }


    
    render() {
        let articles = this.props.articleNumber ? this.props.articles.slice(0, this.props.articleNumber) : this.props.articles
        return (
            <div>
                <div className="area-title"><h1>Check our latest news</h1></div>
                <div className="container">
                    <div className="row">
                            {articles.map((article, index) => <ArticleCard key={article.id} article={article}></ArticleCard>)}
                    </div>
                </div>
            </div>
            
        )
    }
}

