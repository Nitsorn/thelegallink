var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Landing = require('./components/landing');
var CivilLawyer = require('./components/lawyers/civil')

module.exports = (

	<Router history={new HashHistory}>
		<Route path="/" component={Main}>
			<Route path="landing" component={Landing} />
			<Route path="lawyer-civil" component={CivilLawyer} />
		</Route>
	</Router>


)