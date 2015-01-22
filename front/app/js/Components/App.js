/** @jsx React.DOM */
var Router = require('react-router-component');
var React = require('react');
var Main = require('./Main/Main');
var Challenge = require('./Challenge/Challenge');
var Template = require('./Template');
var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({

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