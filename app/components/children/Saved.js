let React = require('react');

var Saved = React.createClass({
    render: function () {
        return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="text-center panel-title">Saved Articles</h4>
				</div>
				<div className="panel-body text-center">
					return (
					<div className="articleList">
                        {/*{articles}*/}
					</div>
					)
				</div>
			</div>
        )
    }
});

//var newArray = this.props.data.docs.slice(0,10);

module.exports = Saved;