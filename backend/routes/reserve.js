const express = require("express");

const { Getreservations ,Addreservation,Deletereservation,EditReservation, EditReservationandadduser} = require("../controlles/reserve");

const reserveRoutes = express.Router();
reserveRoutes.get("/all", Getreservations);
reserveRoutes.post("/Add", Addreservation);
reserveRoutes.delete("/delete/:id", Deletereservation);

reserveRoutes.put("/edit/:id", EditReservation);

module.exports = reserveRoutes;