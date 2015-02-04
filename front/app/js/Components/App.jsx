/** @jsx React.DOM */
var React        = require('react');
var UserActions  = require('../Actions/UserActions');
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header       = require('./Header/Header.jsx');
var Main         = require('./Main/Main.jsx');
var Challenge    = require('./Challenge/Challenge.jsx');

var App = React.createClass({

  componentDidMount: function() {
      UserActions.init();
  },

  render: function () {
    return (
      <div className="container">
        <Header />
        <RouteHandler />
      </div>
    );
  },

});

module.exports = App;
