const {body} = require('express-validator');
const express = require("express");

const authControllers = require('../../controllers/authControllers/auth');

const router = express.Router();
// ---------------------------------------------------------------- //
    // Not in actual use since the models hasn't been created //
// ---------------------------------------------------------------- //

router.post('/signup', [
    body("username")
    .isLength({min: 3, max: 20})
    .custom(async (value, { req }) => {
        if (value.trim() === "") {
            Promise.reject("Name field must not be empty!")
        }
        return true
    }),
    body("password", "Password must be at least 8 characters")
    .isLength({min: 8})
    .isAlphanumeric().withMessage("Password must be mixture of numbers and alphabets")
    .custom(async (value, { req }) => {
        if (value.trim() === "") {
            let error = new Error("Password field must not be empty!");
            error.statusCode = 404;
            throw error
        }
        return true
    }),
    body("email", "Email field must'nt be empty")
    .isEmail().withMessage("This is not a valid email...")
    .notEmpty()
    .custom(async (value, { req }) => {
        if (value.trim() === "") {
            Promise.reject("Name field must not be empty!")
        }
        return true
    })
] ,authControllers.postSignup);

router.post('/login', authControllers.postLogin)

module.exports = router;