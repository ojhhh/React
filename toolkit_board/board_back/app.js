const express = require("express");
const session = require("express-session");
const cors = require("cors");
const dot = require("dotenv").config();
const bodyParser = require("body-parser");
const path = require("path");
const { sequelize } = require("./models");

// routers
const userRouter = require("./routers/users");

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.error(err);
  });
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/users", userRouter);

app.listen(process.env.SET_PORT, () => {
  console.log("server on");
});
