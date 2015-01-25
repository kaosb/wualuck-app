/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {

    email: {
      type: 'string',
      unique: true,
      required: true
    },

    password: {
      type: 'string',
      required: true
    },

    name: {
      type: 'string',
      required: true
    },

    picture: {
      type: 'string',
      defaultsTo: 'http://lorempixel.com/50/50/people/'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
  },



  beforeCreate: function(atts, next) {
    var bcrypt = require('bcrypt');

    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return next(err); }

      bcrypt.hash(atts.password, salt, function(err, hash) {
        if (err) { return next(err); }

        atts.password = hash;
        next();
      });
    });
  }

};

