"use strict";
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
  title: String,
  description: String,
  image: String,
  type: String,
  date: String,
  articleId: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Feed", FeedSchema);