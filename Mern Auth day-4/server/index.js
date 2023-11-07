// entry point
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

// mongdb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log("Database Is Not Connected", err));

// intializations
const app = express();

app.use("/", require("./routes/authRoutes"));

const port = 8000;
app.listen(port, () =>
  console.log(`Server is runnnin on port http://localhost:${port}`)
);
