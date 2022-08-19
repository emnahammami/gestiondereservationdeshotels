const mongoose = require("mongoose");







const users = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: {
    type: String,
    default: 'user',
    enum: [ "user", "agent"]
   }
   ,
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    
});
module.exports = mongoose.model("users", users);