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
    	zoom: 13
  	});

  	var marker = new google.maps.Marker({
    	position: latLng,
    	map: map,
    	title: 'Hello World!'
  	});
  },
	render: function(){
		return <div className="listing-item">
			<img className= "listing-item-img" src={this.props.item.photo_url}></img>
			<h3>{this.props.item.name}</h3>
			<h4>Phone: {this.props.item.phone}</h4>
			<h4>Email: {this.props.item.email}</h4>
			<div className="g-map-single" id={"g-map-single-"+this.props.item[".key"]}></div>
		</div>
	},
});