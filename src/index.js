// import all the necessary packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// we are using port 8000
//const port = 8000;
const port = process.env.PORT || 8000;

const Post = require("./routes/Post");

const app = express();
// const uri = process.env.MONGODB_URI;

const uri = "mongodb+srv://instaClone:instaClone123@cluster0.dfssdtd.mongodb.net/?retryWrites=true&w=majority"

// DB connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware to convert our request data into JSON format
app.use(bodyParser.json());

app.use("/", Post);

// start the server in the port 8000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});