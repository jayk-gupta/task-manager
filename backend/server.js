const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());

// CONFIGURATIONS
const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.PASSWORD;

// DATABASE CONNECTION
const mongoURL = `mongodb+srv://jay:${PASSWORD}@cluster0.qgs52h0.mongodb.net/task_manager`;

mongoose
  .connect(mongoURL)
  .then(() => console.log("Connected to MongoDB server"))
  .catch((err) => console.error("MongoDB connection error", err));

// ROUTES
const taskRoutes = require("./routes/TaskRoutes");
const userRoutes = require("./routes/userRoutes");


app.use("/task",taskRoutes);
app.use("/user", userRoutes);

/////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
