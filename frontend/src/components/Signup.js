import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";

function Signup() {
  const initialData = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [signupData, setSignupData] = useState(initialData);
  const [toastPrompt, setToastPrompt] = useState("");
  const history = useHistory();

  const handleSignupDataChange = (event) => {
    setSignupData({
      ...signupData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSignupSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("/backend/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/html",
        },
        credentials: "include",
        body: JSON.stringify(signupData),
      });
      const text = await response.text();
      setSignupData(initialData);
      const toast = new Toast(document.getElementById("liveToast"));
      setToastPrompt(text);
      toast.show();
      if (response.status === 201) {
        history.push("/login");
      }
    } catch (error) {
      const toast = new Toast(document.getElementById("liveToast"));
      setToastPrompt("Signup error");
      toast.show();
      console.log("Signup error");
    }
  };

  const { name, email, phoneNumber, password, confirmPassword } = signupData;

  return (
    <div className="container signupPage">
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
      <div className="row signupPageRow">
        <div className="col-12 col-lg-6 leftSignupImage">
          <img src="img/signup.png" alt="signup" />
        </div>
        <div className="col-12 col-lg-6 rightSignupForm">
          <div className="container">
            <div className="row signupTextRow">
              <div className="col-12 signupText">
                <span>Signup</span>
              </div>
            </div>
            <div className="row formInputRow">
              <div className="col-12 formInputCol">
                <form className="container formInput" autoComplete="off">
                  <div className="row">
                    <div className="col-2">
                      <label htmlFor="name" className="form-label">
                        <span
                          className="iconify"
                          data-icon="bi:people-fill"
                        ></span>
                      </label>
                    </div>
                    <div className="col-10">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        autoFocus="on"
                        value={name}
                        onChange={handleSignupDataChange}
                      />
                    </div>
                  </div>
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
                        value={email}
                        onChange={handleSignupDataChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <label htmlFor="phoneNumber" className="form-label">
                        <span
                          className="iconify"
                          data-icon="el:phone-alt"
                        ></span>
                      </label>
                    </div>
                    <div className="col-10">
                      <input
                        type="number"
                        className="form-control"
                        id="phoneNumber"
                        placeholder="Phone Number (optional)"
                        value={phoneNumber}
                        onChange={handleSignupDataChange}
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
                        onChange={handleSignupDataChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <label htmlFor="confirmPassword" className="form-label">
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
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleSignupDataChange}
                      />
                    </div>
                  </div>
                  <div className="row buttonRow">
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn"
                        onClick={handleSignupSubmit}
                      >
                        Signup
                      </button>
                    </div>
                  </div>
                  <div className="formLastText">
                    <span>
                      Already registered? &nbsp;
                      <span id="lastTextLogin">
                        <NavLink to="/login">Login</NavLink>
                      </span>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Signup);
