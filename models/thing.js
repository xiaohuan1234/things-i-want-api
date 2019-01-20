const mongoose = require("mongoose");

//db name: things
mongoose.connect('mongodb://localhost/things', {
  useMongoClient: true,
});
mongoose.set("debug", true);
mongoose.Promise = Promise;

//bag schema
const bagSchema = new mongoose.Schema({
  brand: String,
  name: String,
  price: Number,
  color: String,
});

//collection name: bags
const Bag = mongoose.model("Bag", bagSchema);

//shoe schema
const shoeSchema = new mongoose.Schema({
  brand: String,
  name: String,
  price: Number,
  color: String,
  size: Number,
});

//collection name: shoes
const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = {Bag, Shoe};
