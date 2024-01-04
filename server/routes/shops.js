const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Shops endpoint");
});

 module.exports = router