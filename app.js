const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv/config');

const app = express();

app.use(helmet());
app.use(morgan());

// Configuring the server permissions for CORS protocols...
app.use(cors({
    origin: "*",
    methods: "POST, GET, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization"
}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE")
})

// Dedicated middleware for handling errors/exceptions
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json(error.message)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Connected to port ${port}`))