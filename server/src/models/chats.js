const mongoose = require("mongoose");

const ChatsSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Chat = new mongoose.model("Chat", ChatsSchema);
module.exports = Chat;
