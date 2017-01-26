var Achievement = require('./achievementModel.js');
var Q = require('q');

var findAchievement = Q.nbind(Achievement.findOne, Achievement);
var createAchievement = Q.nbind(Achievement.create, Achievement);
var findAchievements = Q.nbind(Achievement.find, Achievement);

module.exports = {
  newAchievement : function(req, res, next) {
    return createAchievement(req.body).then(function(achievement) {
      if (achievement) {
        res.json(achievement)
      } 
      next()
    }).fail(function(err){
      next(err);
    });
  },
  getAchievements : function(req, res, next) {
    return findAchievements(req.body).then(function(achievements){
      if(achievements) {
        res.json(achievements)
      }
      next()
    }).fail(function(err){
      next(err)
    });
  },
  getAchievement : function(req, res, next) {
    return findAchievement(req.body).then(function(achievement){
      if(achievement) {
        res.json(achievement)
      }
      next()
    }).fail(function(err){
      next(err)
    });
  }

};