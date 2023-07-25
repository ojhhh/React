const { users } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.SignUp = async (req, res) => {
  try {
    const { user_id, user_pw } = req.body;
    const chkId = await users.findOne({ where: { user_id }, raw: true });
    if (!chkId?.id) {
      const hash = bcrypt.hashSync(user_pw, 10);
      users.create({ user_id, user_pw: hash });
      res.send(200);
    } else {
      res.send("already use");
    }
  } catch (error) {
    console.error(error);
  }
};

exports.LogIn = async (req, res) => {
  try {
    const { user_id, user_pw } = req.body;
    // console.log(req);
    const chkId = await users.findOne({ where: { user_id }, raw: true });
    if (chkId?.id) {
      if (bcrypt.compareSync(user_pw, chkId.user_pw)) {
        let token = jwt.sign(
          {
            id: user_id,
          },
          process.env.ACCESS_TOKEN_KEY,
          { expiresIn: "20m" }
        );
        req.session.accessToken = token;
        res.cookie("token", token, { httpOnly: true });
        res.send(token);
      } else {
        res.send("wrong password");
      }
    } else {
      res.send("not exist id");
    }
  } catch (error) {
    console.error(error);
  }
};
