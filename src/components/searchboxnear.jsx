var React = require('react');
var Link = require('react-router').Link

module.exports = React.createClass({
	getInitialState: function(){
		return ({
			lat: 0,
			lng: 0,
			job: '',
		})
	},

	render: function() {
		var lat = this.state.lat;
		var lng = this.state.lng;

		if (lat > 48.6 && lat < 49.5 && lng > -123.4 && lng < -121.9) {

			var link = "/search-results?job=" + this.props.job + "&lat=" + this.state.lat + "&lng=" + this.state.lng;

		} else {
			var link = '';
			// some user feedback to use vancouver address
		}

		return (
			<div className = "dropdown-container">
				<input type="text" id="search-near" placeholder="Near: All Areas" />
				<div id='go-container'>
					{/* link temporarily hard links to civil lawyer it will be dynamic later */}
					<Link to={link}>
						<img src='./files/images/search.svg'/>
					</Link>
				</div>
			</div>
		)
	},
	// below is to mount listener that communicates with maps API
	componentDidMount: function () {
		var autocomplete = new google.maps.places.Autocomplete(document.getElementById('search-near'));
		autocomplete.addListener('place_changed', function(){this.getLatLng(autocomplete)}.bind(this));
	},
	getLatLng: function(autocomplete) {
		var place = autocomplete.getPlace();
		var lat = place.geometry.location.lat();
		var lng = place.geometry.location.lng();
		this.setState({lat: lat, lng: lng});
	}
})
