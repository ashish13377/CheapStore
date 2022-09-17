const express = require("express");
const router = express.Router();
const User = require("../models/users");

//Testing server
router.get("/", (req, res) => {
  res.send("Hello Basu");
});

// User Registration API

router.post("/api/register/user", async (req, res) => {
  console.log("Hit");
  const {
    firstName,
    lastName,
    phoneNumber,
    userName,
    studentID,
    email,
    passowrd,
  } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(422).json({ msg: "User already Exist!" });
  } else {
    try {
      const user = new User({
        firstName,
        lastName,
        phoneNumber,
        userName,
        studentID,
        email,
        passowrd,
      });
      await user.save();
      res.status(200).json({
        msg: "User Created plaese wait for verifiation",
      });
    } catch (err) {
      res.status(422).json({ msg: "Registration Failed" });
    }
  }
});

module.exports = router;
