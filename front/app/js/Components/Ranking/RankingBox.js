/** @jsx React.DOM */
var React = require('react');
var WualuckActions = require('../../Actions/WualuckActions');
var WualuckStoreWatchMixin = require('../../Mixins/WualuckStoreWatchMixin');
var WualuckStore = require('../../Stores/WualuckStore');
var RankingFilter = require('../Ranking/RankingFilter');
var RankingList = require('../Ranking/RankingList');

function getAppState () {
  return {
    ranking: WualuckStore.getAll(),
    filterText: WualuckStore.getFilterText()
  }
}

var RankingBox = React.createClass({
  mixins: [WualuckStoreWatchMixin(getAppState)],

  render: function() {
    return (
      <div className="RankingBox">
        <h4>Ranking</h4>
        <RankingFilter />
        <RankingList ranking={this.state.ranking} filterText={this.state.filterText} />
      </div>
    );
  }
});

module.exports = RankingBox;