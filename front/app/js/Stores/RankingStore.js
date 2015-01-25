var WualuckDispatcher = require('../Dispatchers/WualuckDispatcher');
var EventEmitter = require('events').EventEmitter;
var RankingConstants = require('../Constants/RankingConstants');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'ranking_change';

var _ranking = [];
var _filterText = '';

var RankingStore = assign({}, EventEmitter.prototype, {

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
      case RankingConstants.RANKING_VOTE:
        var index = _.findIndex(_ranking, { 'id': action.data.id });
        _ranking[index] = action.data;
        _ranking.sort(function(a,b) {
          return a.votes < b.votes;
        });
        RankingStore.emitChange();
        break;

      case RankingConstants.RANKING_FILTER:
        _filterText = action.text;
        RankingStore.emitChange();
        break;

      case RankingConstants.RANKING_LOAD_SUCCESS:
        _ranking = action.data;
        RankingStore.emitChange();
        break;
    }

    return true;
  })

});

module.exports = RankingStore