var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var redirectModule = require('react-router/lib/redirect');
var Redirect = redirectModule.Redirect;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Landing = require('./components/landing');
var SearchResults = require('./components/search/search-results')

module.exports = (

	<Router history={new HashHistory}>
		<Redirect from="/" to="landing" />
		<Route path="/" component={Main}>
			<Route path="landing" component={Landing} />
			<Route path="search-results" component={SearchResults} />
		</Route>
	</Router>


)