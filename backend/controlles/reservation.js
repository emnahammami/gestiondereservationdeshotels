const reservations= require("../model/reservation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    {const reservationss= new reservations(req.body);
       await reservationss.save();
    res.status(200).send({msg:"reservation added",reservationss})
    
    
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
       
        exports.EditReservationandadduser=async(req, res) =>{
          try
        {
          const reservation = new reservations({
            nomhotel: req.nomhotel,
            dateentree: req.dateentree,
            user: req.user._id,
            datesortie:req.datesortie,
          rating:req.rating,
          avatar:req.avatar
          });
          const createdReservation= await reservation.save();
  res.status(201).json(createdReservation);
        
        
        }
        catch (error) {
            res.status(200).send("couldnt add reservation")
        
        }}
        exports.Findreservationbyid= async(req, res) =>{
     
          try
          {const fr= await reservations.findById(req.params.id)
             
          res.status(200).send({msg:"res found",fr})
          
         
          }
          catch (error) {
              res.status(500).send("couldnt found res")
          
          }}