const reserve = require("../model/reserve");
const reservations= require("../model/reserve");

exports.Getreservations = async (req, res) => {
    try {
      const r= await reservations.find();
      res.status(200).send({ msg: "list of reservations", r});
    } catch (error) {
      res.status(500).send("couldn't get reservations");
    }
  };
  exports.Addreservation=async (req, res) =>{
    try
    {const reservess= new reservations(req.body);
       await reservess.save();
    res.status(200).send({msg:"reservation added",reservess})
    
    
    }
    catch (error) {
        res.status(200).send("reservation cannot be added")
    
    }}




    exports.Deletereservation= async(req, res) =>{
      try
      {const deleted= await reservations.findByIdAndDelete(req.params.id)
         
      res.status(200).send({msg:"reservation deleted",deleted})
      
     
      }
      catch (error) {
          res.status(500).send("couldnt delete reservation")
      
      }}


      exports.EditReservation=async(req, res) =>{
        try
        {const updated= await reservations.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
            
           
        res.status(200).send({msg:"reservation updated",updated})
        
        
        }
        catch (error) {
            res.status(200).send("couldnt update reservations")
        
        }}
       
       
      