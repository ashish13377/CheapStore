require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("./db/conn");
const router = require("./routers/router");
const port = process.env.PORT || 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server Starts on port ${port}`));
