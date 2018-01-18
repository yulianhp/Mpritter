const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mpritter');
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  email: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;