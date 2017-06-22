let React = require('react');

var Saved = React.createClass({
    render: function () {

        if (this.props.data === "") {
            return (
				<div className="panel panel-default">
					<div className="panel-heading">
						<h4 className="text-center panel-title">Saved</h4>
					</div>
					<div className="panel-body text-center">
						<p>No articles saved.</p>
					</div>
				</div>
            )
        }

        var newArray = this.props.data;

        const articles = newArray.map((article) =>
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="text-center panel-title">{article.title}</h4>
				</div>
				<div className="panel-body text-center">
					<p style={{color: "cadetblue"}}>{article.author}</p>
					<p><a href={article.url}>{article.url}</a></p>

				</div>
			</div>
        );

        return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="text-center panel-title">Saved Articles</h4>
				</div>
				<div className="panel-body text-center">
					{articles}
				</div>
			</div>
        )
    }
});



//var newArray = this.props.data.docs.slice(0,10);

module.exports = Saved;