var express = require('express');
var router = express.Router();
const email = require('../services/email/email.js');

module.exports = function(SignUp) {
  router.post('/', function(req, res) {
    SignUp.create(req.body.userData, function(err) {
      if (err) throw err;
      email.sendEmail(req.body.userData)
      res.json({ message: "success"});
    });
 
  });   

  return router;
};