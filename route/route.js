require("dotenv").config();
const User = require("../model/model");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.get("/backend", async (req, res) => {
  try {
    const token = req.signedCookies.rahulshaw;
    const { _id } = await jwt.verify(token, process.env.SECRET_KEY);
    const idExist = await User.exists({ _id });
    if (idExist) {
      const userDoc = await User.findById(_id);
      const fullName = userDoc.name;
      const nameArray = fullName.split(" ");
      const firstName = nameArray[0];
      res.status(200).send(firstName);
    } else {
      res.status(401).send("You are not login");
    }
  } catch (error) {
    res.status(401).send("You are not login");
  }
});

router.get("/backend/feedback", async (req, res) => {
  try {
    const token = req.signedCookies.rahulshaw;
    const { _id } = await jwt.verify(token, process.env.SECRET_KEY);
    const idExist = await User.exists({ _id });
    if (idExist) {
      res.status(200).send("You can send me messages");
    } else {
      res.status(401).send("Please login first");
    }
  } catch (error) {
    res.status(401).send("Please login first");
  }
});

router.post("/backend/feedback", async (req, res) => {
  try {
    const token = req.signedCookies.rahulshaw;
    const { _id } = await jwt.verify(token, process.env.SECRET_KEY);
    const idExist = await User.exists({ _id });
    if (idExist) {
      const userDoc = await User.findById(_id);
      userDoc.feedback.push(req.body);
      await userDoc.save();
      res.status(201).send("Message sent successfully");
    } else {
      res.status(401).send("Message can't be sent");
    }
  } catch (error) {
    res.status(401).send("Please login first");
  }
});

router.post("/backend/signup", async (req, res) => {
  try {
    const { email, password, confirmPassword, phoneNumber } = req.body;
    let validPhoneNumber;
    if (phoneNumber) {
      validPhoneNumber = validator.isMobilePhone(phoneNumber.toString());
    } else {
      validPhoneNumber = true;
    }
    if (password === confirmPassword) {
      const emailExist = await User.exists({ email });
      if (emailExist) {
        res.status(409).send("The email is already present. You can login");
      } else if (!validPhoneNumber) {
        res.status(400).send("Invalid Phone Number");
      } else {
        const userDoc = new User(req.body);
        await userDoc.hashPassword();
        await userDoc.save();
        res.status(201).send("Signup is successful");
      }
    } else {
      res.status(403).send("Password and Confirm Password are not matching");
    }
  } catch (error) {
    const errors = error.errors;
    const firstValue = Object.values(errors)[0];
    const errorMessage = firstValue.message;
    res.status(400).send(errorMessage);
  }
});

router.post("/backend/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.exists({ email });
    if (emailExist) {
      const userDoc = await User.findOne({ email });
      const isMatch = await bcrypt.compare(password, userDoc.password);
      if (isMatch) {
        const token = await userDoc.generateToken();
        res.cookie("rahulshaw", token, {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: false,
          signed: true,
        });
        res.status(200).send("Login is successful");
      } else {
        res.status(404).send("Invalid login details");
      }
    } else {
      res.status(404).send("Invalid login details");
    }
  } catch (error) {
    res.status(404).send("Invalid login details");
  }
});

router.get("/backend/logout", async (req, res) => {
  try {
    const token = req.signedCookies.rahulshaw;
    const { _id } = await jwt.verify(token, process.env.SECRET_KEY);
    const idExist = await User.exists({ _id });
    if (idExist) {
      res.clearCookie("rahulshaw", { signed: true });
      res.status(200).send("Logout successful");
    } else {
      res.status(401).send("Please login first");
    }
  } catch (error) {
    res.status(401).send("Please login first");
  }
});

module.exports = router;
