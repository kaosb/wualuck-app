/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  login: function(req, res) {
    var bcrypt = require('bcrypt');

    User.findOneByEmail(req.param('email')).exec(function(err, user) {
      if (err) { res.json({ error: 'DB error' }, 500); }

      if (user) {
        bcrypt.compare(req.param('password'), user.password, function(err, match) {
          if (err) { res.json({error: 'Server error'}, 500); }

          if (match) {
            req.session.user = user.id;
            req.session.save();
            res.json(user);
          }else {
            if (req.session.user) { req.session.user = null; }
            res.json({error: 'Invalid credentials'}, 400);
          }
        });
      }else {
        res.json({error: 'Not found'}, 404);
      }
    });
  },

  logout: function(req, res) {
    delete req.session.user;
    return res.json({"msg": "logged out"}, 200);
  },

  session: function(req, res) {
    var id = req.session.user || 0;

    User.findOneById(id).exec(function(err, user) {
      if (err) { res.json({error: 'DB error'}, 500); }

      if (user){
        return res.json(user);
      }else{
        return res.json({"error": "Not logged in"});
      }
    });
  }

};

