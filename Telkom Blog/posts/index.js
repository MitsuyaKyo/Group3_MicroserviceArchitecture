const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const mongoose = require("mongoose");
var mongoDB = 'mongodb://127.0.0.1/telkomblogpost';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const dataSchema = new mongoose.Schema({
  type: {
    required: true,
    type: String
  },
  id: {
      required: true,
      type: String
  },
  title: {
    required: true,
    type: String
  },
})
Model = mongoose.model('post', dataSchema)

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {

  posts = new Model({
    type: "PostCreated",
    id: randomBytes(4).toString("hex"),
    title: req.body.title
  })
  try {
    posts.save()
    res.send({
      data: posts
    })
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
  await axios.post("http://localhost:4005/events", posts);

  res.status(201).send('hit');
});

app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
