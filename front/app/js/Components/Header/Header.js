/** @jsx React.DOM */
var Search = require('./Search');
var HeaderUser = require('./HeaderUser');
var Link = require('react-router-component').Link;
var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <Search />
        <Link href="/">
          <img src="img/wualuck-logo-header.png" alt="Wualuck" className="logo" />
        </Link>
        <HeaderUser />
      </div>
    );
  }
});


module.exports = Header;