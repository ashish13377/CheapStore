const mongoose = require("mongoose");

const MessegeSchema = new mongoose.Schema(
  {
    chatID: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Messege = new mongoose.model("Messege", MessegeSchema);
module.exports = Messege;
