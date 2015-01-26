/** @jsx React.DOM */
var React       = require('react');
var Router      = require('react-router-component');
var UserActions = require('../Actions/UserActions');
var Main        = require('./Main/Main.jsx');
var Challenge   = require('./Challenge/Challenge.jsx');
var Template    = require('./Template.jsx');
var Locations   = Router.Locations;
var Location    = Router.Location;

var App = React.createClass({

  componentDidMount: function() {
      UserActions.init();
  },

  render: function () {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Main} />
          <Location path="/desafia" handler={Challenge} />
        </Locations>
      </Template>
    );
  },

});

module.exports = App;
