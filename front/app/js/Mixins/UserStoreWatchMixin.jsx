/** @jsx React.DOM */
var React       = require('react');
var UserStore   = require('../Stores/UserStore');
var UserActions = require('../Actions/UserActions');

var UserStoreWatchMixin = function(cb) {
  return {
    getInitialState: function() {
      return cb();
    },

    componentDidMount: function() {
      UserStore.addChangeListener(this._onChange);
      // UserActions.init();
    },

    componentWillUnmount: function() {
      UserStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState(cb());
    }
  }
};

module.exports = UserStoreWatchMixin;
