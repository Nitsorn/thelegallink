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
						},
						{
							name: 'Conveyancing Lawyers',
						},
						{
							name: 'Criminal Lawyers',
						},
						{
							name: 'Family Lawyers',
						},
						{
							name: 'Immigration Lawyers',
						},
						{
							name: 'Personal Injury Lawyers',
						},
						{
							name: 'Will and Estates Lawyers',
						},
						{
							name: 'General Practitioners',
						},
						{
							name: 'Specialist-Psychiatrists',
						},
						{
							name: 'Specialist-Neurologists',
						},
						{
							name: 'Specialist-Others',
						},
						{
							name: 'Active Rehabilitators',
						},
						{
							name: 'Aqua Therapists',
						},
						{
							name: 'Chiropractors',
						},
						{
							name: 'Massage Therapists',
						},
						{
							name: 'Occupational Therapists',
						},
						{
							name: 'Personal Trainers',
						},
						{
							name: 'Physiotherapists',
						},
						{
							name: 'Yoga Therapists',
						},
						{
							name: 'Autobody/ Collision Specialists',
						},
						{
							name: 'Car Dealers',
						},
						{
							name: 'Insurance Professionals',
						},
						{
							name: 'Court Reporting Services',
						},
						{
							name: 'Intepreter/ Translators',
						},
						{
							name: 'Notary Publics',
						},
						{
							name: 'Mediators',
						},
						{
							name: 'Accountants',
						},
						{
							name: 'Appraisers',
						},
						{
							name: 'Economists',
						},
						{
							name: 'Insurance Brokers',
						},
						{
							name: 'Real Estate Agents',
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
						},
						{
							name: 'Conveyancing Lawyers',
						},
						{
							name: 'Criminal Lawyers',
						},
						{
							name: 'Family Lawyers',
						},
						{
							name: 'Immigration Lawyers',
						},
						{
							name: 'Personal Injury Lawyers',
						},
						{
							name: 'Will and Estates Lawyers',
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
						},
						{
							name: 'Specialist-Psychiatrists',
						},
						{
							name: 'Specialist-Neurologists',
						},
						{
							name: 'Specialist-Others',
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
							name: 'Active Rehabilitators',
						},
						{
							name: 'Aqua Therapists',
						},
						{
							name: 'Chiropractors',
						},
						{
							name: 'Massage Therapists',
						},
						{
							name: 'Occupational Therapists',
						},
						{
							name: 'Personal Trainers',
						},
						{
							name: 'Physiotherapists',
						},
						{
							name: 'Yoga Therapists',
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
							name: 'Autobody/ Collision Specialists',
						},
						{
							name: 'Car Dealers',
						},
						{
							name: 'Insurance Professionals',
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
							name: 'Court Reporting Services',
						},
						{
							name: 'Intepreter/ Translators',
						},
						{
							name: 'Notary Publics',
						},
						{
							name: 'Mediators',
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
						},
						{
							name: 'Appraisers',
						},
						{
							name: 'Economists',
						},
						{
							name: 'Insurance Brokers',
						},
						{
							name: 'Real Estate Agents',
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
		this.props.toSearchResults(whatwasclicked);
		this.animate();
	},


	getInitialState: function() {

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
			count: 0
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

	stopPropagation: function(e) {
		e.stopPropagation()
	},

	componentDidUpdate: function() {
		if (this.props.toggleCloseDrop != this.state.count) {
			this.setState({dropdownshown: false, marginTop: -260, arrowDown: false, height: 60});
			$('#arrow-gray').css('transform','rotate(0deg');
			this.setState({count: this.props.toggleCloseDrop})
		}
	},

	render: function() {


		var selected = this.state.selected;		
		var height = {height: this.state.height + 'px'};
		var marginTop = {top: this.state.marginTop + 'px'};


		return (

		<div className='dropdown-container' style={height} onClick={this.stopPropagation}> 
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