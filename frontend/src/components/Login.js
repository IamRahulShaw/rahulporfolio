import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";

function Login({ redirectFromFeedback, setRedirectFromFeedback, setStatus }) {
  const initialData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialData);
  const [toastPrompt, setToastPrompt] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (redirectFromFeedback) {
      const toast = new Toast(document.getElementById("liveToast"));
      setToastPrompt("Login to send me messages");
      toast.show();
      setRedirectFromFeedback(false);
    }
  }, [redirectFromFeedback]);

  const handleLoginDataChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  const handleLoginSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("/backend/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/html",
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });
      const text = await response.text();
      setLoginData(initialData);
      const toast = new Toast(document.getElementById("liveToast"));
      setToastPrompt(text);
      toast.show();
      if (response.status === 200) {
        setStatus(true);
        history.push("/");
      }
    } catch (error) {
      const toast = new Toast(document.getElementById("liveToast"));
      setToastPrompt("Login error");
      toast.show();
      console.log("Login error");
    }
  };

  const { email, password } = loginData;

  return (
    <div className="container loginPage">
      <div className="position-fixed p-3 liveToastOuterPart">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{toastPrompt}</div>
            <button
              type="button"
              className="btn-close me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <div className="row loginPageRow">
        <div className="col-12 col-lg-6 leftLoginForm">
          <div className="container">
            <div className="row loginTextRow">
              <div className="col-12 loginText">
                <span>Login</span>
              </div>
            </div>
            <div className="row formInputRow">
              <div className="col-12 formInputCol">
                <form className="container formInput" autoComplete="off">
                  <div className="row">
                    <div className="col-2">
                      <label htmlFor="email" className="form-label">
                        <span
                          className="iconify"
                          data-icon="mdi:email-edit"
                        ></span>
                      </label>
                    </div>
                    <div className="col-10">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        autoFocus="on"
                        value={email}
                        onChange={handleLoginDataChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <label htmlFor="password" className="form-label">
                        <span
                          className="iconify"
                          data-icon="teenyicons:password-solid"
                        ></span>
                      </label>
                    </div>
                    <div className="col-10">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleLoginDataChange}
                      />
                    </div>
                  </div>
                  <div className="row buttonRow">
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn"
                        onClick={handleLoginSubmit}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="formLastText">
                    <span>
                      Don't have an account? &nbsp;
                      <span id="lastTextSignup">
                        <NavLink to="/signup">Signup</NavLink>
                      </span>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 rightLoginImage">
          <img src="img/login.png" alt="login" />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Login);
