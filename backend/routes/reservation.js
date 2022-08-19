const express = require("express");
const { Findreservationbyid, Getreservations ,Addreservation,Deletereservation,EditReservation, EditReservationandadduser} = require("../controlles/reservation");
const reservationRoutes = express.Router();
reservationRoutes.get("/all", Getreservations);
reservationRoutes.post("/Add", Addreservation);
reservationRoutes.delete("/delete/:id", Deletereservation);

reservationRoutes.put("/edit/:id", EditReservation);
reservationRoutes.post("/adduser", EditReservationandadduser);
reservationRoutes.get("/find/:id", Findreservationbyid);
module.exports = reservationRoutes;