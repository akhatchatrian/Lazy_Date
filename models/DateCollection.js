
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateCollectionSchema = new Schema({
  collectionName: {
    type: String
  },
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
        type: Integer
      },
      location: {
        type: String
      },
      price: {
        type: Integer
      } 
    }
  },
  collectionInfo: {
    intimacy: {
      type: Integer
    },
    adventurous: {
      type: Integer
    },
    interests: Array,
    age: Boolean,
    location: {
      type: String
    },
    price: {
      type: Integer
    } 
  }
});

module.exports = DateCollection = mongoose.model("DateCollection", DateCollectionSchema);

