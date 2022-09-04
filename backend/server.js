const express = require("express");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/user");
const reservationRoutes = require("./routes/reservation");
const reserveRoutes = require("./routes/reserve");
const cors=require("cors")
const app = express();
app.use(cors())
app.use(express.json());
require("dotenv").config();

connectDB();
app.use("/api/users", userRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/reserve", reserveRoutes);
app.listen(process.env.port, () =>
  console.log(`app is runnig on port ${process.env.port}`)
);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}
