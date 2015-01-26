var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var EventEmitter      = require('events').EventEmitter;
var UserConstants     = require('../Constants/UserConstants');
var assign            = require('object-assign');
var _                 = require('lodash');

var CHANGE_EVENT = 'user_change';

var _user = {};//{name: "Alan Turing", picture: "http://placehold.it/50x50"};
var _error_message = '';
var _signup_step = 'chooseProvider';

var UserStore = assign({}, EventEmitter.prototype, {

  getCurrentUser: function() {
    return _user;
  },

  getErrorMessage: function() {
    return _error_message;
  },

  getSignUpStep: function() {
    return _signup_step;
  },

  isLoggedIn: function() {
    return ! _.isEmpty(_user);
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
      case UserConstants.INVALID_LOGIN:
        _error_message = action.msg;
        _user = {};
        UserStore.emitChange();
        break;

      case UserConstants.LOGIN_SUCCESS:
        _error_message = '';
        _user = action.user;

        UserStore.emitChange();
        break;

      case UserConstants.LOGGED_OUT:
        _user = {};
        UserStore.emitChange();
        break;

      case UserConstants.SIGNUP_ERROR:
        _error_message = action.msg;
        UserStore.emitChange();
        break;

      case UserConstants.SIGNUP_CLEAR:
        _error_message = '';
        UserStore.emitChange();
        break;

      case UserConstants.SIGNUP_SUCCESS:
        _error_message = '';
        _signup_step = 'chooseProvider';
        _user = action.user;
        UserStore.emitChange();
        break;

      case UserConstants.SIGNUP_STEP:
        _signup_step = action.step;
        _error_message = '';
        UserStore.emitChange();
    }

    return true;
  })

});

module.exports = UserStore;
