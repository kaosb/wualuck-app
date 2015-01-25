/** @jsx React.DOM */
var React = require('react');

var Search = React.createClass({
  render: function() {
    return (
            <div className="searchBox">
            <i className="ion-search"></i>
              <input type="search" className="Search" />
            </div>
    );
  }
});

module.exports = Search;