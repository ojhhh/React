const express = require("express");
const session = require("express-session");
const cors = require("cors");
const dot = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
cors({
  origin: ["http://127.0.0.1:3000"],
  credentials: true,
});

app.listen(process.env.SET_PORT, () => {
  console.log("server on");
});
