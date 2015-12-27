var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className = "dropdown-container">
				<input type="text" id="search-near" placeholder="Near: All Areas" />
			</div>
		)
	}
})