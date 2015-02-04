/** @jsx React.DOM */

var React        = require('react');
var App          = require('./Components/App.jsx');
var Router       = require('react-router');
var Route        = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Challenge    = require('./Components/Challenge/Challenge.jsx');
var Main         = require('./Components/Main/Main.jsx');
var NotFound     = require('./Components/Main/NotFound.jsx');

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Main} />
    <Route name="challenge" path="/desafiar/:marcaSlug" handler={Challenge} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
