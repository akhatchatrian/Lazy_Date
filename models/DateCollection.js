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
  yelpInfo: {
    searchParams: this.state.options.join(","),
    conditions: this.state.conditions
  },
  collectionInfo: {
    intimacy: this.state.intimacy,
    adventurous: this.state.adventurous,
    interests: this.state.interests,
    age: this.state.conditions.age,
    location: this.state.conditions.location,
    price: this.state.conditions.price
  },
  dateList: [//dateIds go here]
});

module.exports = DateCollection = mongoose.model("DateCollection", DateCollectionSchema);

yelpInfo: {
  searchParams: this.state.options.join(","),
  conditions: this.state.conditions
},
collectionInfo: {
  intimacy: this.state.intimacy,
  adventurous: this.state.adventurous,
  interests: this.state.interests,
  age: this.state.conditions.age,
  location: this.state.conditions.location,
  price: this.state.conditions.price
}