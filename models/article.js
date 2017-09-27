
//require mongoose and schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//breakdown schema
var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  date: {
  	type: Date,
  	default: Date.now,
  	required: "Date is Required"
  },
  url: {
  	type: String,
  	required: true,
  	required: "URL is Required",
  	unique: true
  }
});

// model
var Article = mongoose.model('Article', ArticleSchema);

// Export
module.exports = Article;
