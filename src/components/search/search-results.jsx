var React = require('react');
var MapAll = require('./map-all');
var ListingsList = require('./listings-list');

// point of entry for this component is the search button from the searchboxnear compoenent

module.exports = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return {}
	},
	componentWillMount: function() {
		this.fb = new Firebase("https://legal-link.firebaseIO.com/listings");
		this.bindAsArray(this.fb, "listings");
	},
	render: function() {
		return (	
			<div id='search-results-container'>
				<div id='navbar'>
					<div id='searchTitle'>Finding: {this.props.location.query.job} </div>
					<ListingsList job={this.props.location.query.job} listings={this.state.listings} />
				</div>
				<MapAll listings={this.state.listings} job={this.props.location.query.job} lat={this.props.location.query.lat} lng={this.props.location.query.lng}/>
			</div>
		)
	}
})