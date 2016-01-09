var React = require('react');
var Link = require('react-router').Link

module.exports = React.createClass({
	render: function() {
		return (	
			<div id="nav">	
				<Link to = '/landing'>
					<div id="nav-logo-frame">
						<div id="nav-logo"/>
					</div>
				</Link>
			</div>
		)
	}
})