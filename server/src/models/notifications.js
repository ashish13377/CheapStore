const mongoose = require("mongoose");

const NotificationsSchema = new mongoose.Schema({
  from: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  roomID: {
    type: String,
  },
  to: {
    type: mongoose.SchemaTypes.ObjectId,
  },
  fromName: {
    type: String,
  },
});

const Notification = new mongoose.model("Notification", NotificationsSchema);
module.exports = Notification;
