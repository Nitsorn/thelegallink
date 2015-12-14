var React = require('react');
var Header = require('./header');

module.exports = React.createClass({

	render: function() {

		return (

			<div id="container">
				<Header />
				{this.props.children}
			</div>

		)
	}
})