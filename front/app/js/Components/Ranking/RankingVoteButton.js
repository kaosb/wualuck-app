/** @jsx React.DOM */
var React = require('react');
var WualuckActions = require('../../Actions/WualuckActions');

var RankingVoteButton = React.createClass({
  render: function() {
    return (
      <button className="btn-votar" onClick={this._onVoteClick}>Vota</button>
    );
  },

  _onVoteClick: function() {
    WualuckActions.vote(this.props.id);
  }

});

module.exports = RankingVoteButton;