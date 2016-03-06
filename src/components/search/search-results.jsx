var React = require('react');
var MapAll = require('./map-all');
var ListingsList = require('./listings-list');

// point of entry for this component is the search button from the searchboxnear compoenent

module.exports = React.createClass({
	mixins: [ReactFireMixin],
	getInitialState: function(){
		return ({
			loadedAndClicked: false,
			selectedJob: '',
		})
	},
	componentWillMount: function() {
		this.fb = new Firebase("https://legal-link.firebaseIO.com/listings");
		this.bindAsArray(this.fb, "listings");
	},

	openMoreInfo: function(jobTitle) {
		this.setState({selectedJob: jobTitle, loadedAndClicked: true})
	},

	render: function() {
		return (
			<div id='search-results-container'>
				<div id='navbar'>
					<div id='searchTitle'>Finding: {this.props.location.query.job} </div>
					<ListingsList job={this.props.location.query.job} listings={this.state.listings} selectedJob={this.state.selectedJob} myLat={this.props.location.query.lat} myLng={this.props.location.query.lng}/>
				</div>
				<MapAll loaded={this.state.loadedAndClicked} listings={this.state.listings} job={this.props.location.query.job} lat={this.props.location.query.lat} lng={this.props.location.query.lng} openMoreInfo={this.openMoreInfo}/>
		</div>
		)
	},
})
