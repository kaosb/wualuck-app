/** @jsx React.DOM */
var React = require('react');
var WualuckActions = require('../../Actions/WualuckActions');

var RankingFilter = React.createClass({
  render: function() {
    return (
      <div className="RankingFilterBox">
        <i className="ion-search"></i>
        <input ref="filterInput" className="RankingFilter input" type="text" placeholder="Filtrar..." onChange={this._onFilterChange} />
      </div>
    );
  },

  _onFilterChange: function() {
    var text = this.refs.filterInput.getDOMNode().value;
    WualuckActions.filter(text);
  }

});

module.exports = RankingFilter;