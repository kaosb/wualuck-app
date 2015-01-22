/** @jsx React.DOM */
var React = require('react');

var Search = React.createClass({
  render: function() {
    return (
            <div className="searchBox">
            <i className="ion-ios-search-strong"></i>
              <input type="search" className="Search" />
            </div>
    );
  }
});

module.exports = Search;