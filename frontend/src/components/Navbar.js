import React, { useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar({ status, setStatus, setName }) {
  const menuButtonRef = useRef(null);
  const history = useHistory();
  const rotatebutton = () => {
    menuButtonRef.current.classList.toggle("toggle180deg");
    // const navbarSupportedContent = document.getElementById(
    //   "navbarSupportedContent"
    // );
    // navbarSupportedContent.classList.toggle("show");
  };

  const handleLogoutClick = async () => {
    try {
      const response = await fetch("/backend/logout", {
        method: "GET",
        headers: {
          Accept: "text/html",
        },
        credentials: "include",
      });
      if (response.status === 200) {
        setStatus(false);
        setName("Buddy");
        history.push("/");
      }
    } catch (error) {
      console.log("Logout error");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" exact to="/">
            <img src="/img/RahulShaw.svg" alt="RahulShaw" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={rotatebutton}
          >
            <i className="fas fa-chevron-circle-down" ref={menuButtonRef}></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 responsive-navbar">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/feedback">
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/project">
                  Project
                </NavLink>
              </li>
              <li
                className={status ? "nav-item hidden" : "nav-item"}
                id="signup"
              >
                <NavLink className="nav-link logButton" to="/signup">
                  Signup
                </NavLink>
              </li>
              <li
                className={status ? "nav-item hidden" : "nav-item"}
                id="login"
              >
                <NavLink className="nav-link logButton" to="/login">
                  Login
                </NavLink>
              </li>
              <li
                className={status ? "nav-item" : "nav-item hidden"}
                id="logout"
              >
                <button
                  className="nav-link logButton"
                  onClick={handleLogoutClick}
                  id="logoutButton"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default React.memo(Navbar);
