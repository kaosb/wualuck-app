var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var EventEmitter = require('events').EventEmitter;
var WualuckConstants = require('../Constants/WualuckConstants');
var $ = require('jquery');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _user = {"name": "Tomás Dintrans", "picture": "http://placehold.it/50x50"};

var UserStore = assign({}, EventEmitter.prototype, {

  getCurrentUser: function() {
    return _user;
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
        break;
    }

    return true;
  })

});

module.exports = UserStore