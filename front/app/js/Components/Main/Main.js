var React = require('react');
var Link = require('react-router-component').Link;

var Main = React.createClass({
  render: function() {
    return (
        <div className="Home">
          <h1>This is the main content</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          Desafia a una marca
          <Link href="/desafia" className="btn-desafiar">
            <i className="ion-ios-arrow-right"></i>
            <span>Desafia a tus marcas y obten lo que quieres</span>
            <i className="ion-ios-arrow-left"></i>

          </Link>
        </div>
    );
  }
});

module.exports = Main;