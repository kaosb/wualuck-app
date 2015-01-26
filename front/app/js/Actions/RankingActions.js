var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var RankingConstants  = require('../Constants/RankingConstants');
var $                 = require('jquery');

var RankingActions = {

  init: function() {
    $.get('http://localhost:1337/ranking?sort=votes desc')
      .done(function(data) {
        WualuckDispatcher.handleViewAction({
          actionType: RankingConstants.RANKING_LOAD_SUCCESS,
          data: data
        });
      });
  },

  vote: function(id) {
    $.ajax({type: 'POST', url: 'http://localhost:1337/ranking/vote/' + id})
      .done(function(data){
        WualuckDispatcher.handleViewAction({
          actionType: RankingConstants.RANKING_VOTE,
          data: data
        });
      });
  },

  filter: function(text) {
    WualuckDispatcher.handleViewAction({
      actionType: RankingConstants.RANKING_FILTER,
      text: text
    });
  }
}

module.exports = RankingActions;
