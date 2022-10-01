const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const ngrok = require('ngrok')
require("dotenv/config");

// Custom imports
const connectDb = require("./Db/db");
const authRoutes = require("./routes/authRoutes/auth");

const app = express();

app.use(express.json()) // For handling json payloads... i.e request bodies in json format
app.use(express.urlencoded({ extended: false })) // For handling requests in x-www-urlencoded-form
app.use(helmet());
// app.use(morgan());

// Configuring the server permissions for CORS protocols...
app.use(
  cors({
    origin: "*",
    methods: "POST, GET, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE"
  );
  next()
});

// Regular API's
app.use("/auth", authRoutes)


// Dedicated middleware for handling errors/exceptions
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json(error.message);
});

const port = process.env.PORT || 5050;

connectDb(() => {
  app.listen(port, () => {
    console.log(`Connected to port ${port}`)
  });
});