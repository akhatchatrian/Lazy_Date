const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateCollectionSchema = new Schema({
  // collectionName: {
  //   type: String
  // },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  yelpInfo: {
    searchParams: {
      type: String
    },
    conditions: {
      age: {
        type: Number
      },
      location: {
        type: String
      },
      price: {
        type: String
      } 
    }
  },
  collectionInfo: {
    intimacy: {
      type: Number
    },
    adventurous: {
      type: Number
    },
    interests: Array,
    age: Boolean,
    location: {
      type: String
    },
    price: {
      type: String
    } 
  }
});

module.exports = DateCollection = mongoose.model("DateCollection", DateCollectionSchema);

