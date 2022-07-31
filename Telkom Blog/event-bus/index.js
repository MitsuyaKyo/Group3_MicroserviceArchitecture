const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { randomBytes } = require("crypto");
const mongoose = require("mongoose");
var mongoDB = 'mongodb://127.0.0.1/telkomblog';
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
Model = mongoose.model('event', dataSchema)

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;
  const data = new Model({
    type: req.body.type,
    id: req.body.id,
    title: req.body.title
  })
  try {
    data.save()
    res.send({
      data: event
    })
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }


  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", async (req, res) => {
  const events = await Model.find()
  res.json(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
