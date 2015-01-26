/** @jsx React.DOM */
var React          = require('react');
var RankingActions = require('../../Actions/RankingActions');

var RankingVoteButton = React.createClass({
  render: function() {
    return (
      <button className="btn-votar" onClick={this._onVoteClick}>Vota</button>
    );
  },

  _onVoteClick: function() {
    RankingActions.vote(this.props.id);
  }

});

module.exports = RankingVoteButton;
