module.exports = User = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateCollectionSchema = new Schema({
  id: {
    type: Integer,
    required: true
  },
  collectionName: {
      type: String
  },
  dateList: [//dateIds go here]
});

module.exports = DateCollection = mongoose.model("DateCollection", DateCollectionSchema);
