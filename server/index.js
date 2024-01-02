const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRouter = require("./routes/auth");
//const router = require('router');
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/eMart");
    console.log("Connected to db");
  } catch (err) {
    throw err;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb Disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDb connected");
});

// middleware

app.use("/auth", authRouter);
app.listen(5000, () => {
  connect();
  console.log("Connected to backend!");
});
