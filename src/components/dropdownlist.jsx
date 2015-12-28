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
		this.props.changecat(newactive);
		event.stopPropagation();
	},

	changeActiveProfspan: function() {
		var newactivespan = $(event.target).text() ?  $(event.target).text() : event.target.getAttribute('id');
		this.props.changecat(newactivespan)
	},

	stopPropagation: function(e) {
		e.stopPropagation();
	},



	// run stop propagation

	

	render: function() {

		var allprops = this.props.categories.map(function(profession){

			var className = 'left-wrapper ' + profession['nickname'];
			var classNamenick = '.' + profession['nickname'];

			if (profession['name'] == this.props.selected) {
				$(classNamenick).css({'background-color': '#939598','color':'#DADEE4'});
				var image = <img onClick={this.changeActiveProf} src={profession['iconGray']} id={profession['name']} /> 
			} else {
				$(classNamenick).css('background-color', '#DADEE4','color','#939598')
				var image = <img onClick={this.changeActiveProf} src={profession['icon']} id={profession['name']} /> 

			}

			return (

				<div onClick={this.changeActiveProf} className={className} id={profession['name']}> 
					{image}
					<p id={profession['name']} onClick={this.changeActiveProf} > 
						<span onClick={this.changeActiveProfspan}> 
							{profession['name']} 
						</span> 
					</p>
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
				<div id='right-side'> 
					{selecteddrop} 
				</div>

			</div>
		)
	}
})