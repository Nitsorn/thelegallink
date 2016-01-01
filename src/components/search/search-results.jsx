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
			<div>
				<h1 id=''> Your Search Results: </h1>
				<MapAll listings={this.state.listings} lat={this.props.location.query.lat} lng={this.props.location.query.lng}/>
				<ListingsList listings={this.state.listings} />
			</div>
		)
	}
})