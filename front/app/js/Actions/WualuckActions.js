var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var WualuckConstants = require('../Constants/WualuckConstants');
var $ = require('jquery');
var WualuckActions = {

  init: function() {
    $.get('http://localhost:1337/ranking?sort=votes desc')
      .done(function(data) {
        WualuckDispatcher.handleViewAction({
          actionType: WualuckConstants.WUALUCK_LOAD_SUCCESS,
          data: data
        });
      });
  },

  vote: function(id) {
    $.ajax({type: 'POST', url: 'http://localhost:1337/ranking/vote/' + id})
      .done(function(data){
        WualuckDispatcher.handleViewAction({
          actionType: WualuckConstants.WUALUCK_VOTE,
          data: data
        });
      });
  },

  filter: function(text) {
    WualuckDispatcher.handleViewAction({
      actionType: WualuckConstants.WUALUCK_FILTER,
      text: text
    });
  }
}

module.exports = WualuckActions;