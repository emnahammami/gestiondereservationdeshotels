const mongoose = require("mongoose");







const reserves = new mongoose.Schema({


   name: {type:String,require:true},
   nomhotel: {type:String,require:true},
  
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