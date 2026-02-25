const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

dotenv.config();

const app = express();
const hostname = process.env.HOSTNAME || localhost;
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is the Cyan Api");
});

app.listen(port, () => {
  console.log(`Cyan server is running at http://${hostname}:${port}/`);
  console.log("Cyan Api armed ready...");
});
