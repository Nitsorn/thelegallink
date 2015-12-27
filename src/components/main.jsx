var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

module.exports = React.createClass({

	render: function() {

		return (

			<div id="container">
				<Header />
				{this.props.children}
				<Footer />
			</div>

		)
	}
})