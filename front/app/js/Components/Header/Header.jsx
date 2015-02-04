/** @jsx React.DOM */
var React      = require('react');
var Search     = require('./Search.jsx');
var HeaderUser = require('./HeaderUser.jsx');
var Link       = require('react-router').Link;

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <Search />
        <Link to="/">
          <img src="img/wualuck-logo-header.png" alt="Wualuck" className="logo" />
        </Link>
        <HeaderUser />
      </div>
    );
  }
});


module.exports = Header;
