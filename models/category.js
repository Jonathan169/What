const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String },
  subcategories: [Schema.Types.ObjectId],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;