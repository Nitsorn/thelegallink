var React = require('react');

module.exports = React.createClass({

	render: function() {

		var selectedCat = this.props.categories.filter(function(category){
			return(
				category['name'] == this.props.selected
			)
		}.bind(this))


		var catName = selectedCat[0]['name'];
		var catImage = selectedCat[0]['iconGray'];

		return (

			<div id="cat-image" onClick={this.props.animate}>
				<img src={catImage} />
			</div>
		)
	}
})