require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const app = express();
require("./database/connection");
const cookieParser = require("cookie-parser");
const router = require("./route/route");
const path = require("path");

const port = process.env.PORT || 5000;

// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,POST,OPTIONS",
//   allowedHeaders: "Content-Type, Authorization, X-Requested-With",
//   credentials: true,
// };

// app.options("*", cors(corsOptions));
// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser(process.env.SECRET_KEY));
app.use(router);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("frontend/build"));
  app.use("/about", express.static("frontend/build"));
  app.use("/feedback", express.static("frontend/build"));
  app.use("/project", express.static("frontend/build"));
  app.use("/login", express.static("frontend/build"));
  app.use("/signup", express.static("frontend/build"));
  app.use("*", express.static("frontend/build"));
}

app.listen(port, () => {
  console.log(`The app is running at port number ${port}`);
});
