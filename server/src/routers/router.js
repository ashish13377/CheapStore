const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Item = require("../models/items");
const Chat = require("../models/chats");
const Messege = require("../models/messeges");
const bcrypt = require("bcryptjs");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuth");
const { v4: uuidv4 } = require("uuid");
const Notification = require("../models/notifications");

// User Registration API

router.post("/api/register/user", async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    userName,
    collegeName,
    studentID,
    collegeID,
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
        collegeName,
        studentID,
        collegeID,
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
  try {
    const isUpdated = await User.updateOne(
      { _id: req.user_id },
      { profileimage: req.body.imageurl }
    );

    res.status(200).json({ msg: "Image Updated" });
  } catch (err) {
    res.status(422).json({ msg: "Image updation Failed" });
  }
});
// Api for Update the profilr Information

router.post("/api/user/update/profileinfo", auth, async (req, res) => {
  const { firstName, lastName, about, phoneNumber, email } = req.body;
  try {
    const isUpdated = await User.updateOne(
      { _id: req.user_id },
      { firstName, lastName, about, phoneNumber, email }
    );

    res.status(200).json({ msg: "Profile Updated" });
  } catch (err) {
    res.status(422).json({ msg: "Profile updation Failed" });
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

router.post("/api/delete/product", async (req, res) => {
  const { id } = req.body;
  try {
    const item = await Item.findOne({ _id: id });
    const isRemoved = await item.remove();
    res.status(200).json({ msg: "Deleted" });
  } catch (err) {
    res.status(422).json({ msg: "Reject Failed" });
  }
});

//API for login user

router.post("/api/login/user", async (req, res) => {
  const { userName, password } = req.body;

  if (userName === "admin" && password === process.env.ADMIN_PASSWORD) {
    const token = process.env.ADMIN_TOKEN;
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 50000000),
      sameSite: "None",
      secure: true,
      httpOnly: true,
    });
    res.status(200).json({ msg: "Welcome Admin", admin: true });
  } else {
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
          res.status(200).json({ msg: "Log in succesfull", admin: false });
        }
      } else {
        res.status(422).json({ msg: "No Account Found" });
      }
    } catch (err) {
      res.status(422).json({ msg: "Something Went wrong" });
    }
  }
});

// API for checking user is login or not

router.get("/api/user/islogin", auth, (req, res) => {
  res.status(200).json({ msg: "User is logged in", user: req.rootUser });
});

// API for getting user from id

router.get("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.post("/api/user/islogin", auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    res.status(200).json({ msg: "User is logged in", user });
  } catch (err) {
    res.status(422).json({ msg: "failed to get Buyer info" });
  }
});

router.get("/api/isadmin", adminAuth, async (req, res) => {
  console.log("HIT");
  res.status(200).json({ msg: "Admin is logged in" });
});

//API for logout user

router.get("/api/logout", (req, res) => {
  res.clearCookie("jwt", {
    sameSite: "None",
    secure: true,
    // path: "https://splendorous-sable-15c3ce.netlify.app/",
  });
  res.status(200).json({ msg: "Log out" });
});

// API for creating items

router.post("/api/user/create/item", auth, async (req, res) => {
  const {
    itemName,
    itemPrice,
    description,
    sellerName,
    sellerNumber,
    sellerEmail,
    sellerDepartment,
    sellerLocation,
  } = req.body.itemData;
  try {
    const item = new Item({
      itemName,
      itemPrice,
      description,
      sellerName,
      sellerNumber,
      sellerEmail,
      sellerDepartment,
      sellerLocation,
      sellerCollegeName: req.rootUser.collegeName,
      category: req.body.name,
      sellerID: req.user_id,
      sellerImage: req.rootUser.profileimage,
      images: req.body.images,
    });
    await item.save();

    res.status(200).json({
      msg: "Item Added successfully",
    });
  } catch (err) {
    res.status(422).json({ msg: "Item adding Failed" });
  }
});

// sending all product deatails

router.get("/api/get/products", async (req, res) => {
  try {
    const products = await Item.find();

    res.status(200).json({ msg: "Products sent", products });
  } catch (err) {
    res.status(422).json({ msg: "Sent Failed" });
  }
});
router.get("/api/products", auth, async (req, res) => {
  try {
    const products = await Item.find({ sellerID: req.user_id });

    res.status(200).json({ msg: "Products sent", products });
  } catch (err) {
    res.status(422).json({ msg: "Sent Failed" });
  }
});
router.get("/api/get/products/name", async (req, res) => {
  try {
    const products = await Item.find();
    const productsName = products.map((item) => item.itemName);
    res.status(200).json({ msg: "Products sent", productsName });
  } catch (err) {
    res.status(422).json({ msg: "Sent Failed" });
  }
});
router.get("/api/get/colleges", async (req, res) => {
  try {
    const products = await Item.find();
    const productsName = products.map((item) => item.sellerCollegeName);
    let newArray = [...new Set(productsName)];
    res.status(200).json({ msg: "Products sent", newArray });
  } catch (err) {
    res.status(422).json({ msg: "Sent Failed" });
  }
});

// sending all product deatails

router.post("/api/get/products/filter", async (req, res) => {
  try {
    const products = await Item.find({ category: req.body.cat });
    res.status(200).json({ msg: "Products sent", products });
  } catch (err) {
    res.status(422).json({ msg: "Sent Failed" });
  }
});
router.post("/api/get/products/filter/name", async (req, res) => {
  try {
    const products = await Item.find({
      $or: [{ itemName: req.body.name }, { sellerCollegeName: req.body.name }],
    });

    res.status(200).json({ msg: "Products sent", products });
  } catch (err) {
    res.status(422).json({ msg: "Sent Failed" });
  }
});

// sending a product

router.post("/api/get/product/byid", async (req, res) => {
  try {
    const product = await Item.findById(req.body.id);

    res.status(200).json({ msg: "Products sent", product });
  } catch (err) {
    res.status(422).json({ msg: "Sent Failed" });
  }
});

router.post("/api/create/chat", auth, async (req, res) => {
  try {
    const chat = await Chat.findOne({
      members: { $in: [req.body.reciverID] },
    });
    if (chat) {
      res.status(200).json(chat);
    } else {
      const newChat = new Chat({
        members: [req.user_id.toString(), req.body.reciverID],
      });

      const chat = await newChat.save();
      res.status(200).json(chat);
    }
  } catch (err) {
    res.status(422).json(err);
  }
});

router.get("/api/chat/:id", auth, async (req, res) => {
  try {
    const chat = await Chat.find({
      members: { $in: [req.params.id] },
    });
    res.status(200).json(chat);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.post("/api/messege", async (req, res) => {
  const newMessege = new Messege(req.body);
  try {
    const messege = await newMessege.save();
    res.status(200).json(messege);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.get("/api/messege/:chatID", async (req, res) => {
  try {
    const messege = await Messege.find({
      chatID: req.params.chatID,
    });
    res.status(200).json(messege);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.post("/api/send/notification", async (req, res) => {
  const newNotification = new Notification(req.body);
  try {
    const notification = await newNotification.save();
    res.status(200).json(notification);
  } catch (err) {
    res.status(422).json(err);
  }
});

router.get("/api/get/notification", auth, async (req, res) => {
  try {
    const notification = await Notification.find({
      to: req.user_id.toString(),
    });
    res.status(200).json(notification);
  } catch (err) {
    res.status(422).json(err);
  }
});

module.exports = router;
