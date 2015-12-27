var React = require('react');
var DropdownList = require('./dropdownlist');
var Categories = require('./categories');
var CatImage = require('./catimage');
var Selector = require('./selector');
var $ = require('jquery');

module.exports = React.createClass({

	getDefaultProps: function() {
		return ({

			categories: [
				
				{
					name: 'All Professions',
					nickname: 'all',
					id: 0,
					icon: "./files/images/hammer.svg",
					breakdowns: [
						{
							name: 'Civil Lawyers',
							url: '/#/lawyer-civil',
						},
						{
							name: 'So many other stuff',
							url: '/#/lawyer-family',
						},
						{
							name: 'So many other stuff',
							url: '/#/lawyer-family',
						},
						{
							name: 'So many other stuff',
							url: '/#/lawyer-family',
						}, 
						{
							name: 'So many other stuff',
							url: '/#/lawyer-family',
						},
						{
							name: 'So many other stuff',
							url: '/#/lawyer-family',
						},
						{
							name: 'So many other stuff',
							url: '/#/lawyer-family',
						},
						{
							name: 'So many other stuff',
							url: '/#/lawyer-family',
						},

					]
				},
				{
					name: 'Lawyers',
					nickname: 'law',
					id: 1,
					icon: "./files/images/hammer.svg",
					breakdowns: [
						{
							name: 'Civil Lawyers',
							url: 'lawyer/civil',
						},
						{
							name: 'Family Lawyers',
							url: 'lawyer/family',
						},
					]
				},
				{
					name: 'Doctors & Specialists',
					nickname: 'doc',
					id: 2,
					icon: "./files/images/pill.svg",
					breakdowns: [
						{
							name: 'General Practitioners',
							url: 'doctor/general',
						},
						{
							name: 'Specialist - Psychiatrists',
							url: 'doctor/psyc',
						},
					]
				},
				{
					name: 'Healthcare & Therapy',
					nickname: 'health',
					id: 3,
					icon: "./files/images/heart.svg",
					breakdowns: [
						{
							name: 'Active Rehabilitatators',
							url: 'healthcare/rehab',
						},

					]
				},
				{
					name: 'Automotive Specialists',
					nickname: 'car',
					id: 4,
					icon: "./files/images/wheel.svg",
					breakdowns: [
						{
							name: 'Car Dealers',
							url: 'automotive/dealers',
						},

					]
				},
				{
					name: 'Legal Services',
					nickname: 'legal',
					id: 5,
					icon: "./files/images/paper.svg",
					breakdowns: [
						{
							name: 'Notary Publics',
							url: 'legal/notary',
						},

					]
				},
				{
					name: 'Professional Services',
					nickname: 'prof',
					id: 6,
					icon: "./files/images/bag.svg",
					breakdowns: [
						{
							name: 'Accountants',
							url: 'services/accountants',
						},
					]
				}
			]

		})
	},



	changestuff: function() {
		var input = this.refs.searchInput;
		var include = input.getDOMNode().value;
		this.setState({
			include: include
		})


	},

	updateinput: function(whatwasclicked) {
		document.getElementById('search-find').value = whatwasclicked;
	},

	getInitialState: function() {
		return ({
			category: false,
			selected: 'All Professions',
			include: '',
			dropdownshown: false,
			marginTop: -260,
			arrowDown: false,
		})
	},
	
	animate: function() {

		if (this.state.dropdownshown) {
			this.setState({dropdownshown: false, marginTop: -260, arrowDown: false});
			$('#arrow-gray').css('transform','rotate(0deg');


		} else {
			this.setState({dropdownshown: true, marginTop: 25, arrowDown: true})
			$('#arrow-gray').css('transform','rotate(180deg');
		}
	},

	animateOpen: function() {

		if (!this.state.dropdownshown) {
			this.setState({dropdownshown: true, marginTop: 25, arrowDown: true})
			$('#arrow-gray').css('transform','rotate(180deg');
		}
	},

	changecat: function(newcat) {
		this.setState({selected:newcat});
		document.getElementById('search-find').value = '';
	},

	render: function() {


		var selected = this.state.selected;		


		var marginTop = {top: this.state.marginTop + 'px'};


		return (

		<div className='dropdown-container'>

			<div id='dropdown-input-container'>
				
 				<CatImage 
 					selected={this.state.selected}
 					categories={this.props.categories} 
 					animate={this.animate}/>

				<input 
					type="text" 
					ref='searchInput' 
					id="search-find" 
					placeholder={'Find: ' + this.state.selected} 
					onChange={this.changestuff}  onClick={this.animateOpen}/>

				<div onClick={this.animate} className="dropdown-arrow">
					<div id='arrow-gray'/>
				</div>
			</div>


			<div id='search-dropdown' style={marginTop} >

				<DropdownList 
					changecat={this.changecat}
					animate={this.animate}
					updateinput={this.updateinput}
					include={this.state.include}
					selected={this.state.selected} 
					categories={this.props.categories}/>

			</div>
		</div>


		)
		
	}
})