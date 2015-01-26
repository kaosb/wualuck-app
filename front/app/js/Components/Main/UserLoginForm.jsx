/** @jsx React.DOM */
var React               = require('react');
var Modal               = require('react-modal');
var UserActions         = require('../../Actions/UserActions');
var UserStore           = require('../../Stores/UserStore');
var UserStoreWatchMixin = require('../../Mixins/UserStoreWatchMixin.jsx');

var appElement = document.getElementById('main');

Modal.setAppElement(appElement);
Modal.injectCSS();

function getUserState() {
  return {
    error_message: UserStore.getErrorMessage()
  };
}

var UserLoginForm = React.createClass({
  mixins: [UserStoreWatchMixin(getUserState)],

  _onLogin: function(e) {
    e.preventDefault();

    var credentials = {
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value
    };
    UserActions.login(credentials);
  },

  _onLoginTwitter: function(e) {
    e.preventDefault();

    UserActions.socialLogin('twitter');
  },

  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    var errorClass = 'error' + (this.state.error_message === '' ? ' hide': ' show');
    return (
      <div>
        <a href="#" onClick={this.openModal} className="OpenUserLoginForm">Ingresar</a>
        <Modal
          className="white-popup w300"
          overlayClassName="white-popup-overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal} ><i className="ion-ios-close-empty"></i></button>
          <form onSubmit={this._onLogin} className="form">
            <p className={errorClass}>{this.state.error_message}</p>
            <a href="http://localhost:1337/auth/twitter" target="_self">Ingresar con Twitter</a> <br/>
            <a href="http://localhost:1337/auth/facebook" target="_self">Ingresar con Facebook</a>
            <label htmlFor="email">e-mail</label>
            <input type="text" id="email" ref="email" autoComplete="off" />

            <label htmlFor="password">Clave</label>
            <input type="password" id="password" ref="password" />

            <button className="btn" onClick={this.handleLogin}>Ingresar</button>
          </form>
        </Modal>
      </div>
    );
  }
});

module.exports = UserLoginForm;
