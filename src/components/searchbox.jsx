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
					icon: "./files/images/total.png",
					iconGray: "./files/images/total-gray.png",
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
					iconGray: "./files/images/hammer-gray.png",
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
					iconGray: "./files/images/pill-gray.png",
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
					iconGray: "./files/images/heart-gray.png",
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
					iconGray: "./files/images/wheel-gray.png",
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
					iconGray: "./files/images/paper-gray.png",
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
					iconGray: "./files/images/bag-gray.png",
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
		this.animate();
	},



	getInitialState: function() {

		// if ($(document).width() > 800) {
		// 	dropdownshown = true;
		// 	marginTop = 25;
		// 	arrowDown = true;
		// 	height = 310;

		// } else {
		// 	dropdownshown = false;
		// 	marginTop = -260;
		// 	arrowDown = false;
		// 	height = 60;
		// }

		dropdownshown = false;
		marginTop = -260;
		arrowDown = false;
		height = 60;


		return ({
			selected: 'All Professions',
			include: '',
			dropdownshown: dropdownshown,
			marginTop: marginTop,
			arrowDown: arrowDown,
			height: height,
		})
	},
	
	animate: function() {

		if (this.state.dropdownshown) {
			this.setState({dropdownshown: false, marginTop: -260, arrowDown: false, height: 60});
			$('#arrow-gray').css('transform','rotate(0deg');


		} else {
			this.setState({dropdownshown: true, marginTop: 25, arrowDown: true, height: 310})
			$('#arrow-gray').css('transform','rotate(180deg');
		}
	},

	animateOpen: function() {

		if (!this.state.dropdownshown) {
			this.setState({dropdownshown: true, marginTop: 25, arrowDown: true, height: 310})
			$('#arrow-gray').css('transform','rotate(180deg');
		}
	},

	changecat: function(newcat) {
		newcat ? this.setState({selected:newcat}): '';
		document.getElementById('search-find').value = '';
	},

	render: function() {


		var selected = this.state.selected;		
		var height = {height: this.state.height + 'px'};
		var marginTop = {top: this.state.marginTop + 'px'};


		return (

		<div className='dropdown-container' style={height}> 

			<div id='dropdown-input-container'>
				
 				<CatImage 
 					dropdownshown={this.state.dropdownshown}
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
					stopPropagation={this.stopPropagation}
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