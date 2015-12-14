var React = require('react');
var $ = require('jquery');
var Categories = require('./categories');
var Selector = require('./selector');


module.exports = React.createClass({

	getDefaultProps: function() {
		return ({
			category: false,
			selected: 'All Professions',
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


	getInitialState: function() {
		return ({
			category: false,
			selected: 'All Professions',
		})
	},

	// componentDidMount: function() {
	// 	console.log('mounted');
	// },

	// stopPropagation: function(e) {
 //    e.stopPropagation();
 //  	},

  // 	closeDropdown: function() {
  // 		if (this.state.category) {
		// 	this.setState({category: false});
		// } else {};

  // 	},

  // 	openDropdown: function() {
  // 		if (this.state.category) {
  // 			this.refs.categories.hide();
  // 		} 
  // 		else {
		// 	this.setState({category: true});
		// };
  // 	},


  	onClicked: function() {
  		if(this.state.category){
  			this.refs.selectorbutton.hide();
  		} else {
  			this.setState({ category: true})
  		}
  	},

  	onClickOpen: function() {
  		if(this.state.category){
  			this.refs.selectorbutton.hide();
  		} else {
  		}
  	},

  	onAnimationComplete: function() {
  		console.log('animationcomplete');
  		this.setState({category: false})
  	},
	

	selectCategory: function(newcat) {
		this.setState({selected: newcat});
	},

	render: function() {


		var categories = this.state.category == true ?
				<Categories 
					selectCategory= {this.selectCategory} 
					onClicked= {this.onClicked}
					onComplete={this.onAnimationComplete} 
					categories = {this.props.categories}
					category = {this.state.category}
					selected = {this.state.selected}
					ref="selectorbutton"/>
			: "";

		var selected = this.state.selected;

		var category_chosen = this.props.categories.map(function(category_chosen){

			if (category_chosen['name'] == selected) {
				var breakdown =  category_chosen['breakdowns'].map(function(breakdown){
					return (
						<li><a href={breakdown['url']}> {breakdown['name']}</a> </li>
					)

				})				
				return (
					<ul> {breakdown} </ul>
				)
			} else {
				''
			}
		})

		return (	
			<div id="landing" onClick={this.onClickOpen}> 
				<h2> Find Your Local Service Professionals </h2>

				<div id="search-container">
					<div id="category-selector-container">
 						<Selector onButtonClicked={this.onClicked}/>
 						{categories}
					</div>
					<div id="search-find-container">
						<h3> Find: </h3> 
						<input type="text" id="search-find" placeholder={"Search: " + this.state.selected} />
						<div id='search-dropdown'> 
							{category_chosen}
						</div>
					</div>	
					<div id="search-near-container">
						<h3> Near: </h3> 
						<input type="text" id="search-near" placeholder="Near: All Areas" />
					</div>
					<div id="go-container"> 
						<div id="go-button"/>
					</div>	


				</div>
			</div>
		)
	}
})