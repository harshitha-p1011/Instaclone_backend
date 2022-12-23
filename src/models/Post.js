const mongooose = require("mongoose");

const PostSchema = new mongooose.Schema({
  // Your code goes here
  name:   String,
  location:  String ,
  likes : Number,
  description: String ,
  PostImage :  String,
  date : String
},{timestamps:true});

const Post = mongooose.model("Post", PostSchema);

module.exports = Post;
