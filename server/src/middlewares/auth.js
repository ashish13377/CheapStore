const jwt = require("jsonwebtoken");
const User = require("../models/users");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = await jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({ _id: verifyUser._id });
    req.user_id = rootUser._id;
    req.rootUser = rootUser;
    req.token = token;
    next();
  } catch (err) {
    res.status(422).json({ msg: "JWT not verified" });
  }
};

module.exports = auth;
