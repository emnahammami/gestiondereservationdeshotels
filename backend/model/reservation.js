
const mongoose = require("mongoose");







const reservations = new mongoose.Schema({
   dateentree: {type:Date,require:true},
   datesortie: {type:Date,require:true},
   nomhotel: {type:String,require:true},
   avatar: {type:String,require:true},
   rating: { type: Number, require: true, default: 0 },
  
  });








  module.exports = mongoose.model("reservations", reservations);