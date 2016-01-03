var React = require('react');
var ListingItem = require('./listing-item');

module.exports = React.createClass({
	render: function() {
		return	<div>
          {this.props.listings.map(function(listItem){
            return <ListingItem item={listItem}/>;
          },this)}
        </div>
	}

});