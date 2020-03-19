module.exports = User = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateSchema = new Schema({
  id: {
    type: Integer,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  categories: [],
  image_url: {
    type: String,
    required: true
  },
  rating: {
    type: Integer,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  location: {
      address1: {type: String},
      address2: {type: String},
      city: {type: String},
      zip_code: {type: String},
      country: {type: String},
      state: {type: String}
  }

});

module.exports = Date = mongoose.model("Date", DateSchema);