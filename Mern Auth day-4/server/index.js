// entry point
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
//app
const app = express();

// mongdb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Contected"))
  .catch((err) => console.log("Database Is Not Connected", err));

//
app.use(express.json());

// intializations

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () =>
  console.log(`Server is runnnin on port http://localhost:${port}`)
);
