const User = require('../models/user');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

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
    .catch({
      res.status
    })
    
  }
  
  static login (req, res) {
    
  }
  
  static editUser (req, res) {
    
  }
}