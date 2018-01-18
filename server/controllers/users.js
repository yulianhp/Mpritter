const User = require('../models/user');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
require('dotenv').config()

class UserController {
  static register (req, res) {
    let input = {
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, saltRounds)
    }
    let newUser = new User (input)
    newUser.save()
    .then(function (data){
      res.status (200)
      .json({
        message: 'New user registered',
        dataUser: data
      })
    })
    .catch(function (err){
      res.status (400)
      .json({
        message: 'failed added new user',
        error: err
      })
    })
    
  }
  
  static login (req, res) {
    User.findOne({
      email: req.body.email
    })
    .then(function(dataUser) {
      if (!dataUser) {
        res.status(500)
        .json({
          message: 'email not registered'
        })
      } else if (!bcrypt.compareSync(req.body.password, dataUser.password)) {
        res.status(403)
        .json({
          message: 'unmatched email / password'
        })
      } else {
        let trueUser = {
          uid: dataUser._id,
          username: dataUser.username,
          email: dataUser.email
        }
        jwt.sign(trueUser, process.env.SECRET_KEY, function(err, token) {
          if (err) {
            res.status(500)
            .json({
              message: 'Authentication error'
            })
          } else if (!err) {
            res.status(200)
            .json({
              message: 'Access granted',
              userToken: token
            })
          }
        })
        
      }
    })
  }
  
  static editUser (req, res) {
    
    // User.findById()
  }
}

module.exports = UserController;