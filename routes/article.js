var express = require('express');
var router = express.Router();

module.exports = function(Article) {
  router.get('/', function(req, res) {
    Article.find({}, function(err, articles) {
      console.log("articles", articles)
      if (err) console.error(err);
      res.json(articles);
    })
  });  
  
  router.post('/findOne', function(req, res) {
    Article.findOne({_id: req.body.articleId}, function(err, article) {
      if (err) console.error(err);
      res.json(article);
    })
  }); 

  return router;
};