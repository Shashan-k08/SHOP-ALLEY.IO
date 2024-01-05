const express = require("express");
const Shop = require("../modals/Shop");
const router = express.Router();

router.post("/", async (req, res) => {
  const newShop = new Shop(req.body);

  try {
    const saveShop = await newShop.save();
    res.status(200).json(saveShop);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedShop = await Shop.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedShop);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
