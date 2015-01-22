/** @jsx React.DOM */
var UserStore = require('../../Stores/UserStore');
var Search = require('./Search');
var React = require('react');

function getAppState() {
  return {
    user: UserStore.getCurrentUser()
  }
}

var HeaderUser = React.createClass({
  getInitialState: getAppState,
  render: function() {
    return (
      <div className="HeaderUser">
        <h5 className="UserName">{ this.state.user.name }</h5>
        <img src={ this.state.user.picture } alt="Tomás Dintrans" className="UserPicture" />
      </div>
    );
  }
});


module.exports = HeaderUser;