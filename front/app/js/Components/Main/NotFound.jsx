/** @jsx React.DOM */
var React                 = require('react');
var UserStore             = require('../../Stores/UserStore');
var Link                  = require('react-router').Link;
var UserStoreWatchMixin   = require('../../Mixins/UserStoreWatchMixin.jsx');
var UserRegistrationModal = require('./UserRegistrationModal.jsx');
var CompanyCarousel       = require('./CompanyCarousel.jsx');

function getUserState () {
  return {
    isLoggedIn: UserStore.isLoggedIn()
  };
}

var NotFound = React.createClass({

  render: function() {
    return (
        <div className="NotFound">
          <h2>404 No Encontrado!</h2>
        </div>
    );
  }
});

module.exports = NotFound;
