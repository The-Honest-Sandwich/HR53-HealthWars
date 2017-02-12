var Challenge = require('./challengesModel.js');
var Q = require('q');
var axios = require('axios');
// var nodemailer = require('nodemailer')

var findChallenge = Q.nbind(Challenge.findOne, Challenge);
var createChallenge = Q.nbind(Challenge.create, Challenge);
var findChallenges = Q.nbind(Challenge.find, Challenge);

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'CoonsiderateRacoons@gmail.com',
//         pass: 'HR4Life!'
//     }
// });

// var axios = axios.create({
//   baseURL: 'localhost:3000',
// });
// axios.defaults.baseURL = 'localhost:3000';

// var emailChallenge = function(inviteList) {
//   for (var i = 0; i < inviteList.length; i++) {
//     console.log('getting inside for loop email, i: ', i)
//     axios.get('/api/users/' + inviteList[i])
//     .then(function(user) {
//       console.log('inside then after axios get invited[i]')
//       let mailOptions = {
//           from: '"HealthWars" <CoonsiderateRacoons@gmail.com>', // sender address
//           to: user.email, // list of receivers
//           subject: 'You have been challenged!', // Subject line
//           text: 'You have been challenged on HealthWars, accept or deny and decide your fate!', // plain text body
//           html: 'You have been challenged on HealthWars, accept or deny and decide your fate!' // html body
//       };
//       // send mail with defined transport object
//       transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//               return console.log(error);
//           }
//           console.log('Message %s sent: %s', info.messageId, info.response);
//       });

//     })
//     .catch(function(err) {
//       console.log(err);
//     })
    
//   }
  
// }
module.exports = {

  newChallenge : function(req, res, next) {
    // emailChallenge(req.body.invited);

    // setup email data with unicode symbols
    

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
  },


};