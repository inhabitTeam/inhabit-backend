var express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = function(Feed) {
  router.get('/', function(req, res) {
    Feed.find({}, function(err, feeds) {
      const index = feeds.findIndex(item => item._id == '5d932dbd257584003f06d58d');
      const copyFeeds = [...feeds]
      copyFeeds.splice(index, 1)
      copyFeeds.splice(0, 0, feeds[index])
      if (err) console.error(err);
      res.json(copyFeeds);
    })
  });   

  return router;
};