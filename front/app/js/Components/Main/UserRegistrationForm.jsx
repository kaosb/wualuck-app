/** @jsx React.DOM */
var React               = require('react');
var UserActions         = require('../../Actions/UserActions');

var UserRegistrationForm = React.createClass({

  _onSignUp: function(e) {
    e.preventDefault();
    var newUser =  {
      username: this.refs.username.getDOMNode().value,
      email: this.refs.email.getDOMNode().value,
      password: this.refs.password.getDOMNode().value,
    };
    UserActions.signUp(newUser);
  },

  render: function() {
    var errorClass = 'error' + (this.props.errorMessage === '' ? ' hide': ' show');
    var toggleClass = 'OpenUserRegistrationForm' + (this.props.className ? ' '+ this.props.className : '');
    return (
      <form className="form form-padded" onSubmit={this._onSignUp}>
        <p className={errorClass}>{this.props.errorMessage}</p>

        <label htmlFor="username">nombre</label>
        <input type="text" id="username" ref="username" autoComplete="off" />

        <label htmlFor="email">e-mail</label>
        <input type="text" id="email" ref="email" autoComplete="off" />

        <label htmlFor="password">Clave</label>
        <input type="password" id="password" ref="password" />

        <button className="btn"><i className="ion ion-log-in"></i> Registrarse</button>
        <button className="btn btn-info" onClick={this.props.onBack}><i className="ion ion-arrow-left-b"></i> Volver</button>
      </form>
    );
  }
});

module.exports = UserRegistrationForm;
