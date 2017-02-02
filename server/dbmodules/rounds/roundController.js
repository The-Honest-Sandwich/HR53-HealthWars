var Round = require('./roundModel.js');
var Q = require('q');

var findRound = Q.nbind(Round.findOne, Round);
var createRound = Q.nbind(Round.create, Round);
var findRounds = Q.nbind(Round.find, Round);

module.exports = {
  newRound : function(req, res, next) {
    return createRound(req.body).then(function(round) {
      if (round) {
        res.json(round);
      } 
      next();
    }).fail(function(err){
      next(err);
    });
  },

  getRounds : function(req, res, next) {
    return findRounds(req.body).then(function(round){
      if(round) {
        res.json(round);
      }
      next();
    }).fail(function(err){
      next(err);
    });
  },

  getRound : function(req, res, next) {
    return findRound(req.body).then(function(round){
      if(round) {
        res.json(round);
      }
      next();
    }).fail(function(err){
      next(err);
    });
  }

};