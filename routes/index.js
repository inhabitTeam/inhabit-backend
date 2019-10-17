'use strict';

const Feed = require('../models/Feed');
const Article = require('../models/Article');
const SignUp = require('../models/SignUp');

const apiRoute = require('./apis');
const homeRoute = require('./home');
const feedRoute = require('./feed')(Feed);
const articleRoute = require('./article')(Article);
const signUpRoute = require('./signUp')(SignUp);
// const errorRoute = require('./error');

function init(server) {
  server.get('*', function (req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  });

  // server.get('/', function (req, res) {
  //   res.redirect('/home');
  // });

  server.use('/',homeRoute)
  server.use('/api', apiRoute);
  server.use('/home', homeRoute);
  server.use('/featurefeed', feedRoute);
  server.use('/signUp', signUpRoute);
  server.use('/articles', articleRoute);
  // server.use('/error', errorRoute);
}

module.exports = {
  init: init
};