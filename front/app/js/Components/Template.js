/** @jsx React.DOM */
var Header = require('./Header/Header');
var RankingBox = require('./Ranking/RankingBox');
var React = require('react');

var Template = React.createClass({
  render: function() {
    return (
          <div className="container">
            <Header />
            {this.props.children}
          </div>
    );
  }
});

module.exports = Template;