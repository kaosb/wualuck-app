var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var EventEmitter = require('events').EventEmitter;
var WualuckConstants = require('../Constants/WualuckConstants');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _ranking = [];
var _filterText = '';

var WualuckStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _ranking;
  },

  getFilterText: function() {
    return _filterText;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: WualuckDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case WualuckConstants.WUALUCK_VOTE:
        var index = _.findIndex(_ranking, { 'id': action.data.id });
        _ranking[index] = action.data;
        WualuckStore.emitChange();
        break;

      case WualuckConstants.WUALUCK_FILTER:
        _filterText = action.text;
        WualuckStore.emitChange();
        break;

      case WualuckConstants.WUALUCK_LOAD_SUCCESS:
        _ranking = action.data;
        WualuckStore.emitChange();
        break;
    }

    return true;
  })

});

module.exports = WualuckStore