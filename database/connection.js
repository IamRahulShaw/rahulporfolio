require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("Connection is successful");
  } catch (error) {
    console.log(error);
  }
};

connection();
