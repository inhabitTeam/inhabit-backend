const mongoose = require("mongoose");
const express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");
const logger = require("morgan");

const Feed = require('./models/Feed');
const Article = require('./models/Article');
const SignUp = require('./models/SignUp');


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}



const app = express();
app.use(cors());
const router = express.Router();
var port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

// this is our MongoDB database
var dbConfig = require('./db/db');

// connects our back end code with the database
var options = {
  db: { native_parser: true },
  server: { poolSize: dbConfig.dbPoolSize },
  replset: { rs_name: dbConfig.replicaSet }
}

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, options);


// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


const homeRoute = require('./routes/home');
const feedRoute = require('./routes/feed')(Feed);
const articleRoute = require('./routes/article')(Article);
const signUpRoute = require('./routes/signUp')(SignUp);

app.use('/', homeRoute)
app.use('/home', homeRoute);
app.use('/featurefeed', feedRoute);
app.use('/signUp', signUpRoute);
app.use('/articles', articleRoute);

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));