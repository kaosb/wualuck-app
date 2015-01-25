/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var Modal = require('react-modal');
var UserActions = require('../../Actions/UserActions');
var UserStore = require('../../Stores/UserStore');
var UserStoreWatchMixin = require('../../Mixins/UserStoreWatchMixin');

var appElement = document.getElementById('main');

Modal.setAppElement(appElement);
Modal.injectCSS();

function getUserState() {
  return {
    error_message: UserStore.getErrorMessage()
  }
}

var UserRegistrationForm = React.createClass({
  mixins: [UserStoreWatchMixin(getUserState)],

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
    var toggleClass = 'OpenUserRegistrationForm' + (this.props.className ? ' '+ this.props.className : '');
    return (
      <div>
        <a href="#" onClick={this.openModal} className={toggleClass}>{this.props.children}</a>
        <Modal
          className="white-popup w600 register"
          overlayClassName="white-popup-overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <button className="close" onClick={this.closeModal} ><i className="ion-ios-close-empty"></i></button>
          <img src="img/wualuck-logo-wide.png"/>
          <a href="http://localhost:1337/auth/facebook" className="facebook">Regístrate mediante Facebook</a>
          <a href="http://localhost:1337/auth/twitter" className="twitter">Regístrate mediante Twitter</a>
          <a href="#" className="correo">Regístrate mediante correo</a>
        </Modal>
      </div>
    );
  }
});

module.exports = UserRegistrationForm;