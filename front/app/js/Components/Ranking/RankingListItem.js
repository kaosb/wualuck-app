/** @jsx React.DOM */
var React = require('react');
var RankingVoteButton = require('./RankingVoteButton');

var RankingListItem = React.createClass({
  render: function() {
    return (
      <li className="RankingListItem">
        <div className="light">
          <span className="position">{this.props.position} </span>
          <span className="name">{this.props.name}</span>
          <RankingVoteButton id={this.props.id} />
        </div>
        <span className="votes">{this.props.votes}</span>
      </li>
    );
  }
});

module.exports = RankingListItem;