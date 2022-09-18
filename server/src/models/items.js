const mongoose = require("mongoose");

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
  sellerImage: {
    type: String,
  },
  sellerID: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  images: [
    {
      type: String,
    },
  ],
});

const Item = new mongoose.model("Item", ItemsSchema);
module.exports = Item;
