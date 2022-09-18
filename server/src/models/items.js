const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ItemsSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  itemPrice: {
    type: String,
  },
  description: {
    type: String,
  },
  sellerName: {
    type: String,
    unique: true,
  },
  sellerNumber: {
    type: String,
  },
  sellerEmail: {
    type: String,
  },
  sellerDepartment: {
    type: String,
  },
  sellerLocation: {
    type: String,
  },

  date: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
});
ItemsSchema.pre("save", async function (next) {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  this.date = currentDate;
  next();
});
const Item = new mongoose.model("Item", ItemsSchema);
module.exports = Item;
