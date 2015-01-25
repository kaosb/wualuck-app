/** @jsx React.DOM */
var React = require('react');
var RankingStoreWatchMixin = require('../../Mixins/RankingStoreWatchMixin');
var RankingStore = require('../../Stores/RankingStore');
var RankingFilter = require('../Ranking/RankingFilter');
var RankingList = require('../Ranking/RankingList');

function getAppState () {
  return {
    ranking: RankingStore.getAll(),
    filterText: RankingStore.getFilterText()
  }
}

var RankingBox = React.createClass({
  mixins: [RankingStoreWatchMixin(getAppState)],

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