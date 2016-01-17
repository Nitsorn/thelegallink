var React = require('react');

module.exports = React.createClass({
	componentDidMount: function() {
  	this.initMap();
  },
  initMap: function(){
  	var latLng = {lat: this.props.item.lat_lng.lat, lng: this.props.item.lat_lng.lng};
  	var map = new google.maps.Map(document.getElementById('g-map-single-'+this.props.item[
  		".key"]), {
    	center: latLng,
    	zoom: 13,
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
  	});
    
    var styles = [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#226581"},{"visibility":"on"}]}]
    map.setOptions({styles: styles})

  	var marker = new google.maps.Marker({
    	position: latLng,
    	map: map,
    	title: 'Hello World!'
  	});
  },
	render: function(){
		return (
      <div className="listing-item">
        <div>Name: {this.props.item.name}</div>
        <div>Phone: {this.props.item.phone}</div>
        <div>Email: {this.props.item.email}</div>
        <div className="g-map-single" id={"g-map-single-"+this.props.item[".key"]}></div>
      </div>
    )
	},
});