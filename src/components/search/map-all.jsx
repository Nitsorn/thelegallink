var React = require('react')

module.exports = React.createClass({
  componentDidMount: function() {
  	// this.initMap();
  },
  componentWillReceiveProps: function(){
  	this.initMap();
  },
  initMap: function(){
  	var myLatLng = {lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng)};
  	var map = new google.maps.Map(document.getElementById('g-map-all'), {
    	center: myLatLng,
    	zoom: 13
  	});

  	var my_marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
    	icon: 'http://orig09.deviantart.net/b865/f/2009/282/b/d/free_pikachu_icon_by_daishokin.gif',
    	title: 'Hello World!'
  	});

  	var all_professionals = this.props.listings;
  	for (i = 0; i < all_professionals.length; i++) { 
    	var marker = new google.maps.Marker({
    		position: this.props.listings[i].lat_lng,
    		animation: google.maps.Animation.DROP,
    		map:map
    	});
		}
  },
	render: function(){
		return <div>
			<h1>All Professionals</h1>
			<div id="g-map-all">
			</div>
		</div>
	}

});