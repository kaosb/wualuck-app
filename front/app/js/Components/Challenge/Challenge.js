/** @jsx React.DOM */
var RankingBox = require('../Ranking/RankingBox');
var React = require('react');

var Challenge = React.createClass({
  render: function() {
    return (
      <div className="Challenge">
        <RankingBox />
        <div className="main">
          <form>
            <label htmlFor="dream">¿Cuál es tu sueño?</label>
            <textarea type="text" id="dream" ref="dream"></textarea>

            <label htmlFor="willing">¿Qué estas dispuesto a hacer?</label>
            <textarea type="text" id="willing" ref="willing"></textarea>

            <label htmlFor="dream">¿Por qué lo quieres hacer?</label>
            <textarea type="text" id="why" ref="why"></textarea>

            <button>ENVIAR</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Challenge;