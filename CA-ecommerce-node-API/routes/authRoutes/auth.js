const User = require("../../model/User");
const {body} = require('express-validator');
const express = require("express");
// const passport = require("passport");
require("dotenv/config")

const authControllers = require('../../controllers/authControllers/auth');

const router = express.Router();
// ---------------------------------------------------------------- //
    // Not in actual use since the models hasn't been created //
// ---------------------------------------------------------------- //

router.post('/signup', [
    body("username")
    .isLength({max: 15})
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
    body("phoneNumber")
    .isMobilePhone().withMessage("Must be a mobile number")
    .custom(async (value, { req }) => {
        if (value.trim() === "") {
            let error = new Error("Phone number is required!");
            error.statusCode = 404;
            throw error
        }
        return true
    }),
    body("confirmPassword")
    .custom(async (value, { req }) => {
        if (value !== req.body.password) {
            let error = new Error("Passwords not equal");
            error.statusCode = 404;
            throw error
        }
        return true
    }),
    body("email", "This is not a valid email...")
    .isEmail()
    .notEmpty()
    .custom(async (value, { req }) => {
        if (value.trim() === "") {
            const error = new Error("Email field must'nt be empty!");
            error.statusCode = 401;
            throw error
        }
        const existingEmail = await User.findOne({email: value});
        if (existingEmail) {
            const error = new Error("This Email address already exist");
            error.statusCode = 401;
            throw error
        }
        return true
    })
] ,authControllers.postSignup);

router.post('/login', authControllers.postLogin);

// router.get("login/failed", (req, res, next) => {
//     res.status(401).json("Log in failed")
// })

// router.get("login/suceess", (req, res, next) => {
//     if (req.user) {
//         return res.status(401).json({message: "Log in successfull", user: req.user})
//     }
//     res.status(401).json("Log in failed")
// })

// router.get("/google/callback", passport.authenticate("google", {
//     successRedirect: process.env.CLIENT_URL,
//     failureRedirect: "login/failed",
// }));

// router.get("google", passport.authenticate("google", ["profile", "email"]))

module.exports = router;