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
			toggleCloseDrop: 0
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
		this.setState({toggleCloseDrop: this.state.toggleCloseDrop + 1});
		if (this.state.sideBarOpen) {
			this.setState({sideBarOpen: false, marginRight: -315})
			$('#arrow-side').css('transform','rotate(-90deg');
		}

	},

	stopPropagation: function(e) {
		e.stopPropagation()
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
				<h3> Find Service Professionals Around Your Area And Vancouver</h3>

				<div id="search-container">
					<div id="search-find-container">
						<h5> Find: </h5> 
						<SearchBox stopPropagation={this.stopPropagation} dropdownshown={this.state.dropdowndownshown} toggleCloseDrop={this.state.toggleCloseDrop}/>
					</div>	
					<div id="search-near-container">
						<h5> Near: </h5> 
						<SearchBoxNear toggleOpenSideBar={this.toggleOpenSideBar}/>
					</div>
				</div>
				<div id='top-ten' onClick={this.toggleOpenSideBar}>
					<div> or View Our Top Ten Professionals... </div>
				</div>

				<a href = '#footer' onClick={this.componentDidUpdate}>
					<div  id='scroll-down'> Terms & Conditions </div>
				</a>
			</div>
		)
	}
})