var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;

var userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  salt: {
    type: String
  },

  team: {
    type: String,
    required: false
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  scores: {
    type: [Number]
  },

  challenges: {
    type: [String]
  },

  email: {
    type: String,
    required: true
  }

});

userSchema.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function(resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

userSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model( 'User', userSchema);
