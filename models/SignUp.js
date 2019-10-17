"use strict";
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  name: String,
  email: String,
  date: Date
});

module.exports = mongoose.model("SignUp", SignUpSchema);