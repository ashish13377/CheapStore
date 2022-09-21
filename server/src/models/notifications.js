const mongoose = require("mongoose");

const NotificationsSchema = new mongoose.Schema(
  {
    from: {
      type: String,
    },
    fromName: {
      type: String,
    },
    fromPic: {
      type: String,
    },
    chatID: {
      type: String,
    },
    to: {
      type: String,
    },
  },
  { timestamps: true }
);

const Notification = new mongoose.model("Notification", NotificationsSchema);
module.exports = Notification;
