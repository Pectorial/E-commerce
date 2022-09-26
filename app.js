const express = require('express');
require('dotenv/config');

const app = express();

// Configuring the server permissions for CORS protocols...
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