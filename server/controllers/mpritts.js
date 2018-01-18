const Mpritt = require('../models/mpritt');

class MprittController {
  static createMpritt (req,res) {
    let input = {
      content: req.body.content,
      uid: req.token.uid
    }
    let newMpritt = new Mpritt (input)
    newMpritt.save()
    .then(function (data) {
      res.status (200)
      .json({
        message: 'New mpritt! prit priiiiitt!',
        dataMpritt: data
      })
    })
    .catch(function (err){
      res.status (400)
      .json({
        message: 'post new mpritt, failed',
        error: err
      })
    })
  }
  
  static showMpritt (req,res) {
    let tokenUid = req.token.uid
    Mpritt.findOne({
      "uid": tokenUid
    })
    .then(function (data) {
      res.status (200)
      .json({
        message: 'Show my mpritts',
        mprittList: data
      })
    })
    .catch(function (err){
      res.status (400)
      .json({
        message: 'cannot get mpritts list',
        error: err
      })
    })
  }
  
  static showByTags (req, res) {
    
  }
  
  static removeMpritt (req, res) {
    Mpritt.findByIdAndRemove(req.params.id)
    .then(function(data) {
      res.status (200)
      .json({
        message: 'post deleted',
        mpritt: data
      })
    })
    .catch(function(err) {
      res.status (400)
      .json({
        message: 'delete post failed',
        error: err
      })
    })
  }
}

module.exports = MprittController;