require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    minLength: [3, "Name has to be atleast 3 characters"],
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "{VALUE} is not a valid email",
    },
    unique: [true, "The email is already present. You can login"],
    required: [true, "Email is required"],
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
    minLength: [6, "Password must contain atleast 6 characters"],
    required: [true, "Password is required"],
  },
  confirmPassword: {
    type: String,
    minLength: [6, "Confirm Password must contain atleast 6 characters"],
    required: [true, "Confirm Password is required"],
  },
  feedback: [
    {
      message: String,
    },
  ],
});

userSchema.method("hashPassword", async function () {
  if (this.isModified()) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = this.password;
  }
});

userSchema.method("generateToken", async function () {
  const token = await jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "90d",
  });
  return token;
});

const User = model("User", userSchema);
module.exports = User;
