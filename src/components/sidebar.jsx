var React = require('react');
var SignUpForm = require('./signupform');

module.exports = React.createClass({
	getInitialState: function() {
		return({
			count: 0
		})
	},

	stopPropagation: function(e) {
		e.stopPropagation()
	},

	toggleOpenSignup: function() {
		this.setState({count: this.state.count + 1})
	},

	render: function() {


		return(
			<div id="sidebar-container" style={this.props.marginRight} onClick={this.stopPropagation} > 
				<div id="toggle-tab" onClick={this.props.toggleOpenSideBar}>
					<div id='arrow-side'/>
				</div>
				<div id='sidebar-content'>
					<div id='sidebar-content-container'> 
						<h3>
							<span id='we'>  WE ARE </span> <br />
							<span id='name'> LAUNCHING IN </span> <br/> 
							<span id='number'> 27</span> <span id='days'>DAYS</span> 
						</h3>
						<h4>Want to get featured on our website? </h4>  <h5>Be found by thousands of potential clients around your area.</h5> 
						<div id='free'>
							<div> The next 
								<span id='number' onClick={this.toggleOpenSignup}>
									<strong>
										62 sign-ups
									</strong>
								</span> 
								 <br/>get first month free!
							</div>
							<p> No strings attached. </p>
						</div>

						<SignUpForm count={this.state.count}/>

						<a href="mailto:signup@thelegallink.com">
							<div id='orEmail'> 
								or send an email to us!
							</div>
						</a>
						
					</div>
				</div>
			</div>
		)
	}
})


						