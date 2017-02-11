var Challenge = require('./challengesModel.js');
var Q = require('q');

var findChallenge = Q.nbind(Challenge.findOne, Challenge);
var createChallenge = Q.nbind(Challenge.create, Challenge);
var findChallenges = Q.nbind(Challenge.find, Challenge);

module.exports = {

  newChallenge : function(req, res, next) {
    return createChallenge(req.body)
    .then(function(challenge) {
      if (challenge) {
        res.json(challenge);
      } 
      next();
    }).fail(function(err){
      next(err);
    });
  },

  getChallenges : function(req, res, next) {
    return findChallenges(req.body)
    .then(function(challenges){
      if(challenges) {
        res.json(challenges);
      }
      next();
    }).fail(function(err){
      next(err);
    });
  }

};