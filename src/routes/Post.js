const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const bodyparser = require("body-parser");
const cors = require("cors");


// Your routing code goes here

router.use(bodyparser.json());

// router.get("/Post", (req, res) => {
//   res.json({ ok: "Post" });
// });

//Display the list
router.use(cors());

// .sort("-createdAt");

router.get("/", async (req, res) => {
  Post.find().sort("-createdAt").then((posts)=>{
    res.json(posts)
  }).catch(err=>{
    console.log(err.message)
    })
});


// //Add posts

router.post("/upload", async (req, res) => {
  let d = new Date();
  let dt = d.getDate().toString() + '-' +  d.getMonth().toString() + '-' +  d.getFullYear().toString();
  try {
    const newPost = {
      name : req.body.name,
      location : req.body.location,
      likes : Math.floor(Math.random() * 101),
      description : req.body.description,
      PostImage : req.body.PostImage,
      date : dt
    }
    console.log(req.body);
    const user = await Post.create(newPost);
    res.json({
      status: "Success",
      user
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
});

// // Edit posts by ID

// router.put("/:id", async (req, res) => {
//   try {
//     const user = await Post.updateOne({ _id: req.params.id }, req.body);
//     res.json({
//       status: "Success",
//       user,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "Failed",
//       message: error.message,
//     });
//   }
// });

// //Delete posts by ID

// router.delete("/:id", async (req, res) => {
//   try {
//     const user = await Post.deleteOne({ _id: req.params.id });
//     res.json({
//       status: "Success",
//       user,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "Failed",
//       message: e.message,
//     });
//   }
// });

//Delete many posts by name

router.delete('/:name', async (req,res)=> {
    try {
        const user = await Post.deleteMany({name:req.params.name});
        res.json({
            status:"Success",
            user
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
})

module.exports = router;








// router.get("/", async (req, res) => {
//   try {
//     const u = await Post.find().sort("-createdAt");
//     console.log(u);
//     res.status(201).json({
//       u
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "Failed",
//       message: error.message,
//     });
//   }
// });
