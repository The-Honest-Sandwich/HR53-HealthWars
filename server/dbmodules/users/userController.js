var User = require('./userModel.js');
var Q = require('q');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
var findUsers = Q.nbind(User.find, User);
var findOneAndUpdate = Q.nbind(User.findOneAndUpdate, User);
var updateUser = Q.nbind(User.update, User);

module.exports = {

  newUser : function(req, res, next) {
    return createUser(req.body).then(function(user) {
      if (user) {
        res.json(user);
      }
      next();
    }).fail(function(err){
      next(err);
    });
  },

  getUsers : function(req, res, next) {
    return findUsers(req.body).then(function(users){
      if(users) {
        res.json(users);
      }
      next();
    }).fail(function(err){
      next(err);
    });
  },

  getUser : function(req, res, next) {
    return findUser({username: req.params.username}).then(function(user){
      if(user) {
        res.json(user);
      }
      next();
    }).fail(function(err){
      next(err);
    });
  },

  addAchievement: function(req, res, next) {
    return findOneAndUpdate(
      {username: req.params.username},
      {$push: {'achievements': req.body.achievementId}},
      {new: true})
    .then(function(thing) {
      if (thing) {
        res.json(thing);
      }
      next();
    }).fail(function(err) {
      console.log(err);
      next(err);
    });
  },

  // Edit a user's scores array
  updateScores: function(req, res, next) {
    return findOneAndUpdate(
      {username: req.params.username},
      {$set: {'scores': req.body.scores}},
      {new: true})
    .then(function(thing) {
      if (thing) {
        res.json(thing);
      }
      next();
    }).fail(function(err) {
      console.log(err);
      next(err);
    });
  },

  // Add a new element to all users' scores array on initiation of a new round
  addRound: function(req, res, next) {
    return updateUser(
      {},
      { $push: {'scores': 0}},
      { multi: true })
    .then(function(thing) {
      console.log('Updated users scores!');
      if (thing) {
        res.json(thing);
      }
      next();
    }).fail(function(err) {
      console.log(err);
      next(err);
    });
  },

  signin: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    // console.log('username', username, 'password', password);

    return findUser({username: username})
      .then(function(user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          // console.log('inside else block of signin function');
          // console.log('comparePasswords', user.comparePasswords(password));
          user.comparePasswords(password)
          .then(function(foundUser) {
            // console.log('inside then block', foundUser);
            if (foundUser) {
              res.send(foundUser);
              // var token = jwt.encode(user, 'secret');
              // res.json({token: token})
            } else {
              return next(new Error('No user'));
            }
          });
        }
      })
      .fail(function(error) {
        next(error);
      });
  }

};
