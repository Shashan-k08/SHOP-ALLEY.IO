const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  items: {
    type: [String],
  },
  cheapestItemPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Shop", ShopSchema);
