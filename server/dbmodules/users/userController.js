var User = require('./userModel.js');
var Q = require('q');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
var findUsers = Q.nbind(User.find, User);

module.exports = {
  newUser : function(req, res, next) {
    return createUser(req.body).then(function(user) {
      if (user) {
        res.json(user)
      } 
      next()
    }).fail(function(err){
      next(err);
    });
  },
  getUsers : function(req, res, next) {
    return findUsers(req.body).then(function(users){
      if(users) {
        res.json(users)
      }
      next()
    }).fail(function(err){
      next(err)
    });
  },
  getUser : function(req, res, next) {
    return findUser(req.body).then(function(user){
      if(user) {
        res.json(user)
      }
      next()
    }).fail(function(err){
      next(err)
    });
  }

};