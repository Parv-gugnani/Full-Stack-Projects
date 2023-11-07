// entry point
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

// intializations
const app = express();

const port = 8000;
app.listen(port, () =>
  console.log(`Server is runnnin on port http://localhost:${port}`)
);
