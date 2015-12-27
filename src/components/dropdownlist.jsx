var React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
		return ({
			active: this.props.selected,
		})
	},

	update: function() {
		whatwasclicked = $(event.target).text();
		this.props.updateinput(whatwasclicked);
	},

	changeActiveProf: function(event) {
		var newactive = event.target.getAttribute('id');
		this.props.changecat(newactive)
	},

	changeActiveProfspan: function() {
		newactive = $(event.target).text();
		this.props.changecat(newactive)
	},


	render: function() {

		var allprops = this.props.categories.map(function(profession){
			return (

				<div className="left-wrapper" id={profession['name']}> 
					<img onClick={this.changeActiveProf} src={profession['icon']} id={profession['name']} /> 
					<p id={profession['name']} onClick={this.changeActiveProfspan}> {profession['name']} </p>
				</div>

			)
		}.bind(this));


		var selectedprop = this.props.categories.filter(function(selectedprop) {
			return (selectedprop['name'] == this.props.selected)
		}.bind(this));


		var selecteddrop = selectedprop[0]['breakdowns'].map(function(selecteddrop) {

			if (selecteddrop['name'].toLowerCase().indexOf(this.props.include)!=-1 || selecteddrop['name'].indexOf(this.props.include)!=-1) {
				return (
					<p onClick={this.update}> {selecteddrop['name']} </p>
				)
			} 
			

		}.bind(this));

		return ( 
			<div> 
				<div id='left-side'>
					{allprops}
				</div>
				<div id='right-side' onClick={this.props.animate}> 
					{selecteddrop} 
				</div>

			</div>
		)
	}
})