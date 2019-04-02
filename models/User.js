const mongoose = require("mongoose");
var bcrypt=require("bcrypt");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {type: String, required: true },
  shopName: {type: String},
  products: {
    type: Schema.Types.ObjectId,
    ref: "Products"
  },
});
userSchema.methods.hashPassword=password=>{
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}
userSchema.methods.comparePassword=(password,hash)=>{
  return bcrypt.compareSync(password,hash)
}

let User = mongoose.model("User", userSchema);

module.exports = User;