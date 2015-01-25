/** @jsx React.DOM */
var React = require('react');
var RankingActions = require('../Actions/RankingActions');
var RankingStore = require('../Stores/RankingStore');

var RankingStoreWatchMixin = function(cb) {
  return {
    getInitialState: function() {
      return cb();
    },

    componentDidMount: function() {
      RankingStore.addChangeListener(this._onChange);
      RankingActions.init();
    },

    componentWillUnmount: function() {
      RankingStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState(cb());
    }
  }
};

module.exports = RankingStoreWatchMixin;