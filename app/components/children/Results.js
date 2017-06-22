let React = require('react');

var helpers = require("../utils/helpers");

let Results = React.createClass({

    saveArticle: function (event) {

        var url = event.target.dataset.url;
        var title = event.target.dataset.title;
        var author = event.target.dataset.author;

        helpers.postArticle(url, title, author).then(function () {
            console.log("Article Saved");

            //once article is saved, get list of saved articles

        })
    },


    render: function () {

        if(this.props.data === ""){
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="text-center panel-title">Search Results</h4>
                    </div>
                    <div className="panel-body text-center">
                        <p>Please enter a search term.</p>
                    </div>
                </div>
            )
        }

        var newArray = this.props.data.docs.slice(0,10);

        const articles = newArray.map((article) =>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="text-center panel-title">{article.headline.main}</h4>
                </div>
                <div className="panel-body text-center">
                    <p>{article.snippet}</p>
                    <h6>Published: {article.pub_date}</h6>
                    <p style={{color: "cadetblue"}}>{article.byline.original}</p>
                    <p><a href={article.web_url}>{article.web_url}</a></p>
                    <button
                        className="btn btn-default"
                        onClick={this.saveArticle}
                        data-title={article.headline.main}
                        data-url={article.web_url}
                        data-author={article.byline.original}
                    >Save this Article</button>
                </div>
            </div>
        );

        return (
            <div className="articleList">
                {articles}
            </div>
        )
    }

});
module.exports = Results;