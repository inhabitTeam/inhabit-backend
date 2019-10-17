"use strict";
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  images: Array,
  quote: String,
  type: String,
  socialHandle: String,
  openingParagraph: String,
  body: String,
  date: String,
});

module.exports = mongoose.model("Article", ArticleSchema);
