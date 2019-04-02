const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: "Subcategory"
  },
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Array },
});

const product = mongoose.model("product", productSchema);

module.exports = product;