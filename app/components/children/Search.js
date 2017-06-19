var React = require("react");

var Panel = require('react-bootstrap/lib/Panel');
var FormGroup = require('react-bootstrap/lib/FormGroup')
var FormControl	 = require('react-bootstrap/lib/FormControl')

const title = (
  <h3>Search Here!</h3>
);


var Search = React.createClass({

    getInitialState: function () {
        return {
            query: "",
            startYear: "",
            endYear: ""
        };
    },

    handleChange: function(event) {
        let newState = {};
        console.log(event.target.id);
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        console.log(this.state)
    },

    handleSubmit: function(event) {

        event.preventDefault();

        this.props.setTerm({
            query: this.state.query,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        });
        this.setState({
            query: "",
            startYear: "2010",
            endYear: "2017"
        });
    },



	render: function() {
        return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search</h3>
				</div>
				<div className="panel-body text-center">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<h4 className="">
								<strong>Search Term</strong>
							</h4>
							<input
								value={this.state.query}
								type="text"
								className="form-control text-center"
								id="query"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<h4 className="">
								<strong>Start Year</strong>
							</h4>
							<input
								value={this.state.startYear}
								type="text"
								className="form-control text-center"
								id="startYear"
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="form-group">
							<h4 className="">
								<strong>End Year</strong>
							</h4>
							<input
								value={this.state.endYear}
								type="text"
								className="form-control text-center"
								id="endYear"
								onChange={this.handleChange}
								required
							/>
						</div>
						<button
							className="btn btn-primary"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
        );
    }
});

module.exports = Search ;