const User = require("../../model/User");

const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
require("dotenv/config");
const saltRounds = +process.env.SALT_ROUND;

exports.postSignup = async (req, res, next) => {
  const { username, email, password, phoneNumber } = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 401;
      throw error;
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      role: ["user"],
      cart: { items: [] },
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.postLogin = (req, res, next) => {
  res.send("Login");
};
