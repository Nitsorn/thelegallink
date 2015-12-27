var React = require('react');
var Categories = require('./categories');
var SearchBox = require('./searchbox');
var SearchBoxNear = require('./searchboxnear');


module.exports = React.createClass({

	

	componentDidUpdate: function() {
	  var node = this.getDOMNode();
	  node.scrollTop = node.scrollHeight;
	},

	render: function() {

		
		return (	
			<div id="landing" onClick={this.onClickOpen}> 
				<div id="logo"/>	
				<h3> Find Service Professionals around your area and Vancouver</h3>

				<div id="search-container">
					<div id="search-find-container">
						<h5> Find: </h5> 
						<SearchBox />
					</div>	
					<div id="search-near-container">
						<h5> Near: </h5> 
						<SearchBoxNear />
					</div>
					<div id="go-container"> 
						<div id="go-button"/>
					</div>	
				</div>

				<a href = '#footer' onClick={this.componentDidUpdate}>
					<div  id='scroll-down' />
				</a>
			</div>
		)
	}
})