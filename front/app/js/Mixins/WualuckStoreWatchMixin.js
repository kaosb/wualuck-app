/** @jsx React.DOM */
var React = require('react');
var WualuckActions = require('../Actions/WualuckActions');
var WualuckStore = require('../Stores/WualuckStore');

var WualuckStoreWatchMixin = function(cb) {
  return {
    getInitialState: function() {
      return cb();
    },

    componentDidMount: function() {
      WualuckStore.addChangeListener(this._onChange);
      WualuckActions.init();
    },

    componentWillUnmount: function() {
      WualuckStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState(cb());
    }
  }
};

module.exports = WualuckStoreWatchMixin;