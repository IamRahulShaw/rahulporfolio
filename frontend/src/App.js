import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router";
import "./scss/app.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Feedback from "./components/Feedback";
import Project from "./components/Project";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  // true means login and false means logout
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("Buddy");
  const [redirectFromFeedback, setRedirectFromFeedback] = useState(false); // true means redirect from feedback page to login page

  const fetchStatus = async () => {
    try {
      const response = await fetch("/backend", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "text/html",
        },
      });
      if (response.status === 200) {
        const text = await response.text();
        setName(text);
        setStatus(true);
      }
    } catch (error) {
      console.log("App error");
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [status]);
  return (
    <>
      <div>
        <Navbar status={status} setStatus={setStatus} setName={setName} />
        <Switch>
          <Route exact path="/">
            <Home name={name} status={status} />
          </Route>
          <Route exact path="/about">
            <About name={name} />
          </Route>
          <Route exact path="/feedback">
            <Feedback
              name={name}
              setRedirectFromFeedback={setRedirectFromFeedback}
            />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login
              redirectFromFeedback={redirectFromFeedback}
              setRedirectFromFeedback={setRedirectFromFeedback}
              setStatus={setStatus}
            />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
      <footer id="footer">
        <span>
          &copy; Copyright 2021. All rights reserved. Developed by&nbsp;
          <span id="footerName">Rahul Shaw.</span>
        </span>
      </footer>
    </>
  );
}

export default App;
