var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return ({
			formshow: false,
			height: 40,
			width: 50,
		})
	},

	toggleFormOpen: function() {
		if (this.state.formshow) {
			this.setState({formshow: false, height: 40, width: 50})
		} else {
			this.setState({formshow: true, height: 250, width: 100})
		}
	},


	render: function(){

		var containerstyle = {height: this.state.height + 'px', width: this.state.width + '%'}

		return (
			<div id='sign-up-container' style={containerstyle}>

				<div id='button' onClick={this.toggleFormOpen}>
					<span> Sign up </span>
				</div>

			</div>
		)
	}
})



			