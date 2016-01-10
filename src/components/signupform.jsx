var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return ({
			formshow: false,
			height: 40,
			width: 50,
			backgroundColor: '',
			color: '',
			count: 0,
			business_name: "",
			business_type: "",
			business_location: "",
			contact_email: "",
			contact_phone: ""
		})
	},

	toggleFormOpen: function() {
		if (this.state.formshow) {
			this.setState({formshow: false, height: 40, width: 50, backgroundColor: '#1F2938',color: '#DADEE4'})
			this.sendMail();
		} else {
			this.setState({formshow: true, height: 330, width: 100, backgroundColor: '#939598', color: '#1F2938'})
		}
	},

	componentDidUpdate: function() {
		if (this.props.count !== this.state.count) {
			if (!this.state.formshow) {
				this.setState({formshow: true, height: 330, width: 100, backgroundColor: '#939598', color: '#1F2938'})
			} else {
				this.setState({formshow: false, height: 40, width: 50, backgroundColor: '#1F2938',color: '#DADEE4'})
			}
			this.setState({count: this.props.count})
		}
	},

	sendMail: function (){
		console.log("send mail triggered!");
		emailjs.send("gmail", "test", {"business_name" : this.state.business_name, "business_type" : this.state.business_type, "business_location" : this.state.business_location, "contact_email" : this.state.contact_email, "contact_phone" : this.state.contact_phone})
	},

	handleChange(event){
		var input = {}
		input[event.target.dataset.type] = event.target.value
		this.setState(input);
	},

	render: function(){

		var containerstyle = {height: this.state.height + 'px', width: this.state.width + '%', backgroundColor: this.state.backgroundColor}
		var scrollablestyle = {color: this.state.color}
		return (
			<div id='sign-up-container' style={containerstyle}>

					<div id='button' onClick={this.toggleFormOpen}>
						<span> Sign up </span>
					</div>
					<div id='scrollable-frame'>
						<div id='name'>
							<div className='title'> Name of your business</div>
							<input data-type="business_name" onChange={this.handleChange} type='text' placeholder='Eg: Malik Law Corp.'></input>
						</div>
						<div id='type'>
							<div className='title'> Type of your business </div>
							<input data-type="business_type" onChange={this.handleChange} type='text' placeholder='Eg: Civil Lawyer'/> 
						</div>
						<div id='email'>
							<div className='title'> Location of your business </div>
							<input data-type="business_location" onChange={this.handleChange} type='text' placeholder='Eg: 129th Street Surrey, BC, V3W 4G2'></input>
						</div>
						<div id='email'>
							<div className='title'>Contact Email </div>
							<input data-type="contact_email" onChange={this.handleChange} type='text' placeholder='Eg: hello123@gmail.com'></input>
						</div>
						<div id='type'>
							<div className='title'> Contact phone number </div>
							<input data-type="contact_phone" onChange={this.handleChange} type='text' placeholder='Eg: 604-123-4567'/> 
						</div>
						<div onClick={this.toggleFormOpen} id='submit'>
							<span> Submit </span>
						</div>
					</div>
					
						
			</div>
		)
	}
})



			