var React = require('react');
var Categories = require('./categories');
var SearchBox = require('./searchbox');
var SearchBoxNear = require('./searchboxnear');

var SideBar = require('./sidebar');

module.exports = React.createClass({

	getInitialState: function() {
		return ({
			sideBarOpen: true,
			marginRight: 0,
			dropdownshown: true
		})
	},

	toggleOpenSideBar: function() {
		if (this.state.sideBarOpen) {
			this.setState({sideBarOpen: false, marginRight: -315})
			$('#arrow-side').css('transform','rotate(-90deg');

		} else {
			this.setState({sideBarOpen: true, marginRight: 0})
			$('#arrow-side').css('transform','rotate(90deg');
		}
	},

	toggleOpenSideBarClose: function() {
		this.setState({dropdownshown: false});
		if (this.state.sideBarOpen) {
			this.setState({sideBarOpen: false, marginRight: -315})
			$('#arrow-side').css('transform','rotate(-90deg');
		}

	},

	componentDidUpdate: function() {
	  var node = this.getDOMNode();
	  node.scrollTop = node.scrollHeight;
	},

	render: function() {

		var marginRight = {right: this.state.marginRight + 'px'}

		return (	
			<div id="landing" onClick={this.toggleOpenSideBarClose}> 

				<SideBar 
					marginRight={marginRight} 
					toggleOpenSideBar={this.toggleOpenSideBar}/>
				<div id="logo"/>	
				<h3> Find Service Professionals around your area and Vancouver</h3>

				<div id="search-container">
					<div id="search-find-container">
						<h5> Find: </h5> 
						<SearchBox dropdownshown={this.state.dropdowndownshown}/>
					</div>	
					<div id="search-near-container">
						<h5> Near: </h5> 
						<SearchBoxNear toggleOpenSideBar={this.toggleOpenSideBar}/>
					</div>
				</div>

				<a href='#footer' onClick={this.componentDidUpdate}>
					<div  id='scroll-down' />
				</a>
			</div>
		)
	}
})