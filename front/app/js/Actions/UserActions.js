var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var UserConstants = require('../Constants/UserConstants');
var $ = require('jquery');
var UserActions = {

  init: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1337/auth/session',
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

  socialLogin: function(plataform) {
    switch(plataform) {
      case 'twitter':
        var authWindow = window.open('about:blank', '', 'left=20,top=20,width=400,height=300,toolbar=0,resizable=1');
          /* do the AJAX call requesting for the authorize URL */

          $.ajax({
              url: 'http://localhost:1337/auth/twitter',
              type: "GET"
          })
          .done(function (data) {
              /* This is where the magic happens, we simply redirec the popup to the new authorize URL that we received from the server */
              authWindow.location.replace(data.url);
          })
          .always(function () {
              /* You can poll if the window got closed here, and so a refresh on the main page, or another AJAX call for example */
          });
        break;
    }
  },

  logout: function() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1337/logout',
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