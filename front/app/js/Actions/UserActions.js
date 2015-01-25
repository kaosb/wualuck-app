var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var UserConstants = require('../Constants/UserConstants');
var $ = require('jquery');
var UserActions = {

  init: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1337/user/session',
      xhrFields: {
        withCredentials: true
      }
    })
      .done(function(user) {
        if (user.error) {
          WualuckDispatcher.handleViewAction({
            actionType: UserConstants.LOGGED_OUT,
            data: user.error
          });
          return;
        }
        WualuckDispatcher.handleViewAction({
          actionType: UserConstants.LOGIN_SUCCESS,
          user: user
        });
      })
      .fail(function(xhr, statusCode, err) {
        WualuckDispatcher.handleViewAction({
          actionType: UserConstants.LOGGED_OUT,
          data: xhr.responseJSON.error
        });
      });
  },

  login: function(credentials) {
    $.ajax({
      type: 'POST',
      data: credentials,
      url: 'http://localhost:1337/user/login',
      xhrFields: {
        withCredentials: true
      }
    })
      .done(function(user){
        WualuckDispatcher.handleViewAction({
          actionType: UserConstants.LOGIN_SUCCESS,
          user: user
        });
      })
      .fail(function(xhr, status, err){
        WualuckDispatcher.handleViewAction({
          actionType: UserConstants.INVALID_LOGIN,
          msg: xhr.responseJSON.error
        });
      });
  },

  logout: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1337/user/logout',
      xhrFields: {
        withCredentials: true
      }
    })
    .done(function(user){
      WualuckDispatcher.handleViewAction({
        actionType: UserConstants.LOGGED_OUT,
        user: user
      });
    })
    .fail(function(xhr, status, err){
      WualuckDispatcher.handleViewAction({
        actionType: UserConstants.LOGGED_OUT,
        msg: xhr.responseJSON.error
      });
    });
  }
}

module.exports = UserActions;