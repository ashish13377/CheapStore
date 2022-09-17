const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const auth = require("../middlewares/auth");
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
    password,
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
        password,
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

//API for sending requsest data to Admin

router.get("/api/get/requests", async (req, res) => {
  try {
    const requests = await User.find(
      { isapproved: false },
      { storeimage: 0, password: 0, tokens: 0, __v: 0 }
    );
    res.status(200).json({ msg: "Stores Send", requests });
  } catch (err) {
    res.status(422).json({ msg: "Requests not found" });
  }
});

// Api for Approve the store request

router.post("/api/approve/request", async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findOne({ _id: id });
    const isUpdated = await user.updateOne({ isapproved: true });
    res.status(200).json({ msg: "Accepetd" });
  } catch (err) {
    res.status(422).json({ msg: "Approve Failed" });
  }
});

// Api for Update the profilr pic

router.post("/api/user/update/profilepic", auth, async (req, res) => {
  console.log(req.body);
  try {
    const isUpdated = await User.updateOne(
      { _id: req.user_id },
      { profileimage: req.body.imageurl }
    );
    console.log(isUpdated);
    res.status(200).json({ msg: "Image Updated" });
  } catch (err) {
    res.status(422).json({ msg: "Image updation Failed" });
  }
});

// Api for Remove/Reject the store

router.post("/api/reject/request", async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findOne({ _id: id });
    const isRemoved = await user.remove();
    res.status(200).json({ msg: "Rejected" });
  } catch (err) {
    res.status(422).json({ msg: "Reject Failed" });
  }
});

//API for login user

router.post("/api/login/user", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (user) {
      if (!user.isapproved) {
        res.status(422).json({ msg: "Not yet Verified" });
        return;
      }
      const bool = await bcrypt.compare(password, user.password);
      if (!bool) {
        res.status(422).json({ msg: "Username or password incorrect" });
      } else {
        const token = await user.generateAuthToken();
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 50000000),
          sameSite: "None",
          secure: true,
          httpOnly: true,
        });
        res.status(200).json({ msg: "Log in succesfull" });
      }
    } else {
      res.status(422).json({ msg: "No Account Found" });
    }
  } catch (err) {
    res.status(422).json({ msg: "Something Went wrong" });
  }
});

// API for checking user is login or not

router.get("/api/user/islogin", auth, (req, res) => {
  res.status(200).json({ msg: "User is logged in", user: req.rootUser });
});

//API for logout user

router.get("/api/user/logout", (req, res) => {
  res.clearCookie("jwt", {
    sameSite: "None",
    secure: true,
    // path: "https://splendorous-sable-15c3ce.netlify.app/",
  });
  res.status(200).json({ msg: "Log out" });
});
module.exports = router;
