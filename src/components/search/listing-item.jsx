var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return({
      showDetail: false,
    })
  },

	componentDidMount: function() {
  	this.initMap();
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.selectedJob == nextProps.item.name) {
      this.setState({showDetail: true})
    } else {
      this.setState({showDetail: false})
    }
  },


  initMap: function(){
  	var latLng = {lat: this.props.item.lat_lng.lat, lng: this.props.item.lat_lng.lng};
  	var map = new google.maps.Map(document.getElementById('g-map-single-'+this.props.item[
  		".key"]), {
    	center: latLng,
    	zoom: 12,
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
    	title: 'Your Location'
  	});
  },

  showDetail: function() {
    if (this.state.showDetail) {
      this.setState({showDetail: false})
    } else {
      this.setState({showDetail: true})
    }
  },

	render: function(){
    var height = this.state.showDetail ? {height: '555px'} : {height: '240px'}
		return (
      <div className="listing-item" style={height} onClick={this.showDetail}>
        <div className='listing-name'>{this.props.item.name}</div>
        <div className='listing-description'>some description great place great service omg just come here I will give you candy and also give you valuable legal advice on whether you should buy that house you saw that one time its so cute but that price though. Maybe you should call your grandmother. I dont know.</div>
        <hr/>
        <div className='listing-info'>
          <div>Phone: {this.props.item.phone}</div>
          <div>Email: {this.props.item.email}</div>
          <div>Address: {this.props.item.address}</div>
        </div>
        <div className="g-map-single" id={"g-map-single-"+this.props.item[".key"]}></div>
      </div>
    )
	},
});
