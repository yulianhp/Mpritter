const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mpritter');
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;


const mprittSchema = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  hashtags: []
});

var Mpritt = mongoose.model('Mpritt', mprittSchema);

module.exports = Mpritt;