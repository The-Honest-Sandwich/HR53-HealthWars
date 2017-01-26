var Exercise = require('./exerciseModel.js');
var Q = require('q');

var findExercise = Q.nbind(Exercise.findOne, Exercise);
var createExercise = Q.nbind(Exercise.create, Exercise);
var findExercises = Q.nbind(Exercise.find, Exercise);

module.exports = {
  newExercise : function(req, res, next) {
    return createExercise(req.body).then(function(exercise) {
      if (exercise) {
        res.json(exercise)
      } 
      next()
    }).fail(function(err){
      next(err);
    });
  },
  getExercises : function(req, res, next) {
    return findExercises(req.body).then(function(exercises){
      if(exercises) {
        res.json(exercises)
      }
      next()
    }).fail(function(err){
      next(err)
    });
  },
  getExercise : function(req, res, next) {
    return findExercise(req.body).then(function(exercise){
      if(exercise) {
        res.json(exercise)
      }
      next()
    }).fail(function(err){
      next(err)
    });
  }

};