const mongoose = require("mongoose");
require("dotenv/config");

const connectDb = async (cb) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    connection && cb();
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDb;
