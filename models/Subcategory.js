const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
  name: { type: String },
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

module.exports = Subcategory;