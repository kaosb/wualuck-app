/** @jsx React.DOM */
var React      = require('react');
var Modal = require('react-modal');
var Slider = require('react-slick');

var CompanyCarousel = React.createClass({

  getInitialState: function() {
    return {
      modalIsOpen: false
    };
  },

  openModal: function() {
    this.setState({ modalIsOpen: true });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  render: function() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <a href="#" onClick={this.openModal} className="btn-desafiar">
          <i className="ion-ios-arrow-right"></i>
          <span>Desafia a tus marcas y obten lo que quieres</span>
          <i className="ion-ios-arrow-left"></i>
        </a>
        <Modal
          className="white-popup-slider"
          overlayClassName="white-popup-overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <Slider {...settings}>
                  <div><h3 className="special">1</h3></div>
                  <div><h3 className="special">1</h3></div>
                  <div><h3 className="special">1</h3></div>
                  <div><h3 className="special">1</h3></div>
                  <div><h3 className="special">1</h3></div>
                  <div><h3 className="special">1</h3></div>
                </Slider>
        </Modal>
      </div>
    );
  }

});

module.exports = CompanyCarousel;
