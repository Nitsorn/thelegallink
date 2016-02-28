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
			contact_phone: "",
			mailSent: false,
		})
	},

	toggleFormOpen: function() {
		if (!this.state.mailSent) {
			if (this.state.formshow) {
				this.setState({formshow: false, height: 40, width: 50, backgroundColor: '#1F2938',color: '#DADEE4'})
			} else {
				this.setState({formshow: true, height: 460, width: 100, backgroundColor: '#939598', color: '#1F2938'})
			}
		}
	},
	submitForm: function(e) {
		e.preventDefault();
		this.setState({formshow: false, height: 60, width: 80, backgroundColor: '#1F2938',color: '#DADEE4'})
		$('#button').css('height','80px')
		this.sendMail();
	},

	componentDidUpdate: function() {
		if (this.props.count !== this.state.count) {
			if (!this.state.formshow) {
				this.setState({formshow: true, height: 460, width: 100, backgroundColor: '#939598', color: '#1F2938'})
			} else {
				this.setState({formshow: false, height: 40, width: 50, backgroundColor: '#1F2938',color: '#DADEE4'})
			}
			this.setState({count: this.props.count})
		}
	},



	sendMail: function (){
		console.log("send mail triggered!");
		emailjs.send("gmail", "test", {"business_name" : this.state.business_name, "business_type" : this.state.business_type, "business_location" : this.state.business_location, "contact_email" : this.state.contact_email, "contact_phone" : this.state.contact_phone})
		this.setState({mailSent: true});
		this.props.hideSendEmail();
	},

	handleChange: function(event){
		var input = {}
		input[event.target.dataset.type] = event.target.value
		this.setState(input);
	},

	render: function(){
		var buttonContent = !this.state.mailSent ? 'Sign up' : 'Thank you. We will contact you soon!'
		var containerstyle = {height: this.state.height + 'px', width: this.state.width + '%', backgroundColor: this.state.backgroundColor}
		var scrollablestyle = {color: this.state.color}
		return (
			<div id='sign-up-container' style={containerstyle}>

					<div id='button' onClick={this.toggleFormOpen}>
						<span> {buttonContent} </span>
					</div>
					<form id='scrollable-frame' onSubmit={this.submitForm}>
						<div id='name'>
							<div className='title'> Name of your business</div>
							<input required data-type="business_name" onChange={this.handleChange} type='text' placeholder='Eg: Malik Law Corp.'></input>
						</div>
						<div id='type'>
							<div className='title'> Type of your business </div>
							<input required data-type="business_type" onChange={this.handleChange} type='text' placeholder='Eg: Civil Lawyer'/> 
						</div>
						<div id='address'>
							<div className='title'> Location of your business </div>
							<input required data-type="business_location" id='address-autofill' onChange={this.handleChange} type='text' placeholder='Eg: 129th Street Surrey, BC, V3W 4G2'></input>
						</div>
						<div id='email'>
							<div className='title'>Contact Email </div>
							<input required data-type="contact_email" onChange={this.handleChange} type='text' placeholder='Eg: hello123@gmail.com'></input>
						</div>
						<div id='type'>
							<div className='title'> Contact phone number </div>
							<input required data-type="contact_phone" onChange={this.handleChange} type='text' placeholder='Eg: 604-123-4567'/> 
						</div>
						<input id='submit' type='submit' value='Submit'/>
					</form>
					
						
			</div>
		)
	},
	componentDidMount: function () {
		var autocomplete = new google.maps.places.Autocomplete(document.getElementById('address-autofill'));
		autocomplete.addListener('place_changed', function(){this.getLatLng(autocomplete)}.bind(this));
	},
	getLatLng: function(autocomplete) {
		var place = autocomplete.getPlace();
		var lat = place.geometry.location.lat();
		var lng = place.geometry.location.lng();
		this.setState({lat: lat, lng: lng});
	},
})



			