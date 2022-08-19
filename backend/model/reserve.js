const mongoose = require("mongoose");







const reserves = new mongoose.Schema({
  
   user: {
      type: mongoose.Schema.Types.ObjectId,
    
      ref: 'user',require:true
     
   },
   reservations: {
    type: mongoose.Schema.Types.ObjectId,
  
    ref: 'reservations',require:true
  
 }

  });








  module.exports = mongoose.model("reserves", reserves);