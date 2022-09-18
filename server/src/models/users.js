const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UsersSchema = new mongoose.Schema({
  profileimage: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  about: {
    type: String,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
  userName: {
    type: String,
  },
  collegeName: {
    type: String,
  },
  studentID: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isapproved: {
    type: Boolean,
    default: false,
  },
  date: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
UsersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});
UsersSchema.pre("save", async function (next) {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  this.date = currentDate;
  next();
});
UsersSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    res.status(422).json({ msg: "Jwt not set" });
  }
};
const User = new mongoose.model("User", UsersSchema);
module.exports = User;
