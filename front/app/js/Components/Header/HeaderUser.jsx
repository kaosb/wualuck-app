/** @jsx React.DOM */
var React               = require('react');
var UserStore           = require('../../Stores/UserStore');
var UserStoreWatchMixin = require('../../Mixins/UserStoreWatchMixin.jsx');
var UserActions         = require('../../Actions/UserActions');
var UserLoginForm       = require('../Main/UserLoginForm.jsx');
var Search              = require('./Search.jsx');

function getAppState() {
  return {
    user: UserStore.getCurrentUser(),
    loggedIn: UserStore.isLoggedIn()
  };
}

var HeaderUser = React.createClass({
  mixins: [UserStoreWatchMixin(getAppState)],

  showUserLoginForm: function() {
    console.log('modal');
  },

  _onLogout: function() {
    UserActions.logout();
  },

  render: function() {
    var loggedIn = this.state.loggedIn;
    return (
      <div className="HeaderUser">

        {loggedIn ?
            [
              <h5 key="1" className="UserName" onClick={this._onLogout}>{ this.state.user.username }</h5>,
              <img src={ this.state.user.picture } alt={this.state.user.username} className="UserPicture" key="2" />
            ]
          : <UserLoginForm />}
      </div>
    );
  }
});


module.exports = HeaderUser;
