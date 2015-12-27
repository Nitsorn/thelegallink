var React = require('react');

module.exports = React.createClass({


	hide: function() {
		// console.log('categories.hide');
		var that = this;
		$(React.findDOMNode(this)).stop(true).fadeOut({
			duration: 300,
			complete: function() {
				that.props.onComplete()
			}
		})
	},

	componentDidMount: function() {
		// console.log('categories.componentdidmount');
		$(React.findDOMNode(this)).stop(true).hide().fadeIn(300);
	},

	componentWillUnmount: function() {
		// console.log('Hello.componentWillUnmount');
	},


	render: function() {

		var category = this.props.categories.map(function(category){
			return (
					<div 
						className="category-container" 
						id={category['nickname']} 
						key={category['id']} 
						onClick={this.update}
						ref="test"
						> 
						<div className="category-cover" id={category['name']}/>
						<span> {category['name']} </span>
						<div className="category-circle" id={category['name']}>
							<img id={category['name']} src={category['icon']}/>
						</div>
					</div>
			)
		}.bind(this))

		return (

			<div> {category} 
			</div>

		)
	},

	update: function() {

		newcat = event.target.getAttribute('id');
		this.props.selectCategory(newcat);
		
	},

})