/** @jsx React.DOM */
var React                = require('react');
var Modal                = require('react-modal');
var UserActions          = require('../../Actions/UserActions');
var UserStore            = require('../../Stores/UserStore');
var UserStoreWatchMixin  = require('../../Mixins/UserStoreWatchMixin.jsx');
var UserRegistrationForm = require('./UserRegistrationForm.jsx');
var Link                 = require('react-router').Link;

var appElement = document.getElementById('main');
Modal.setAppElement(appElement);
Modal.injectCSS();

function getUserState () {
  return {
    signUpStep: UserStore.getSignUpStep(),
    errorMessage: UserStore.getErrorMessage()
  };
}

var UserRegistrationModal = React.createClass({

  mixins: [UserStoreWatchMixin(getUserState)],

  getInitialState: function() {
    return {
      modalIsOpen: false
    };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    UserActions.signUpStep('chooseProvider');
    this.setState({
      modalIsOpen: false
    });
  },

  onEmailSignUp: function() {
    UserActions.signUpStep('signUpForm');
  },

  onChooseProvider: function() {
    UserActions.signUpStep('chooseProvider');
  },

  render: function() {
    var toggleClass = 'OpenUserRegistrationModal' + (this.props.className ? ' '+ this.props.className : '');
    var modalClass = '';
    var modalContent = '';

    switch (this.state.signUpStep){
      case 'chooseProvider':
        modalClass = 'white-popup register w600';
        modalContent = (
          <span>
            <button className="close" onClick={this.closeModal} ><i className="ion-ios-close-empty"></i></button>
            <img src="img/wualuck-logo-wide.png" />
            <a href="http://localhost:1337/auth/facebook" className="facebook">Regístrate mediante Facebook</a>
            <a href="http://localhost:1337/auth/twitter" className="twitter">Regístrate mediante Twitter</a>
            <a href="#" onClick={this.onEmailSignUp} className="correo">Regístrate mediante correo</a>
          </span>
        );
        break;

      case 'signUpForm':
        modalClass = 'white-popup register w300';
        modalContent = <UserRegistrationForm onBack={this.onChooseProvider} errorMessage={this.state.errorMessage}/>;
        break;
    }
    return (
      <div>
        <a href="#" onClick={this.openModal} className={toggleClass}>{this.props.children}</a>
        <Modal
          className={modalClass}
          overlayClassName="white-popup-overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          {modalContent}
        </Modal>
      </div>
    );
  }
});

module.exports = UserRegistrationModal;
