const Mpritt = require('../models/mpritt');

class MprittController {
  static createMpritt (req,res) {
    let input = {
      content: req.body.content,
      uid: req.headers.userToken
      
    }
  }
  
  static showMpritt (req,res) {
    
  }
  
  static showByTags (req, res) {
    
  }
  
  static removeMpritt (req, res) {
    
  }
}

module.exports = MprittController;