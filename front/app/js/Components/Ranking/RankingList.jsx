/** @jsx React.DOM */
var React           = require('react');
var RankingListItem = require('./RankingListItem.jsx');

var RankingBox = React.createClass({
  render: function() {
    var rankingItems = this.props.ranking.map(function(rank, i) {
      if (rank.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) { return; }

      return <RankingListItem id={rank.id} position={i+1} name={rank.name} votes={rank.votes} key={rank.name}/>
    }.bind(this));
    return (
      <ul className="RankingBoxList"> {rankingItems} </ul>
    );
  }
});

module.exports = RankingBox;
