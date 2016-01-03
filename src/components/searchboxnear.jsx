var React = require('react');
var Link = require('react-router').Link

module.exports = React.createClass({
	getInitialState: function(){
		return {}
	},
	render: function() {
		return (
			<div className = "dropdown-container">
				<input type="text" id="search-near" placeholder="Near: All Areas" />
				<div id='go-container' onClick={this.props.toggleOpenSideBar}>
					{/* link temporarily hard links to civil lawyer it will be dynamic later */}
					<Link to={"/search-results?foo=bar&" + "lat=" + this.state.lat + "&lng=" + this.state.lng}>
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