const mongoose = require("mongoose");

const RoomsSchema = new mongoose.Schema({
  roomName: {
    type: String,
  },
  roomID: {
    type: String,
  },
  roomPic: {
    type: String,
  },
  messeges: [
    {
      messege: {
        type: String,
      },
      senderid: {
        type: mongoose.SchemaTypes.ObjectId,
      },
    },
  ],
});

const Room = new mongoose.model("Room", RoomsSchema);
module.exports = Room;
