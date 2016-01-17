var React = require('react')

module.exports = React.createClass({
  componentDidMount: function() {
  	// this.initMap();
  },
  componentWillReceiveProps: function(){
  	this.initMap();
    // this.fixZoom();
  },


  initMap: function(){
  	var myLatLng = {lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng)};
    var map = new google.maps.Map(document.getElementById('g-map-all'), {
    	center: myLatLng,
    	zoom: 12,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,

  	});

    // var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#82c3e0"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#bee3f3"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#8eb4c8"}]}]
    var styles = [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#226581"},{"visibility":"on"}]}]
    map.setOptions({styles: styles})


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
		return (
      <div id='map-all-container'>
        <div id="g-map-all">
        </div>
      </div>
    )

	}

});