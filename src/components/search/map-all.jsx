var React = require('react')

module.exports = React.createClass({

  componentDidUpdate: function(){
    // this.fixZoom();
    if (!this.props.loaded) {
      this.initMap();
    }
  },


  getInitialState: function() {
    return({
      selected: '',
    })
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

    var styles = [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#226581"},{"visibility":"on"}]}]
    map.setOptions({styles: styles})

    var icon = {
        url: "../../../files/images/marker-you.svg", // url
        scaledSize: new google.maps.Size(35 , 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

  	var my_marker = new google.maps.Marker({
    	position: myLatLng,
    	map: map,
    	icon: icon,
    	title: 'Hello World!'
  	});

  	var all_professionals = this.props.listings;

    var self = this;

  	for (i = 0; i < all_professionals.length; i++) {
    	var marker = new google.maps.Marker({
    		position: this.props.listings[i].lat_lng,
        title: this.props.listings[i].name,
    		animation: google.maps.Animation.DROP,
    		map:map
    	});

      marker.addListener('click', function(){
        map.panTo(this.getPosition());
        selected = this.title;

        self.props.openMoreInfo(selected)
        if (self.state.selected !== selected) {
          self.setState({selected: selected})
        }
      })
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
