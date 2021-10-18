import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Toast } from "bootstrap/dist/js/bootstrap.esm.min.js";

function Feedback({ name, setRedirectFromFeedback }) {
  const [message, setMessage] = useState("");
  const [toastPrompt, setToastPrompt] = useState("");
  const history = useHistory();

  const fetchStatus = async () => {
    try {
      const response = await fetch("/backend", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "text/html",
        },
      });
      if (response.status !== 200) {
        setRedirectFromFeedback(true);
        history.push("/login");
      }
    } catch (error) {
      console.log("App error");
    }
  };

  useEffect(() => {
    fetchStatus();
  });

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleMessageSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("/backend/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/html",
        },
        credentials: "include",
        body: JSON.stringify({ message: message }),
      });
      const text = await response.text();
      setMessage("");
      const toast = new Toast(document.getElementById("liveToast"));
      setToastPrompt(text);
      toast.show();
    } catch (error) {
      const toast = new Toast(document.getElementById("liveToast"));
      setToastPrompt("Feedback error");
      toast.show();
      console.log("Feedback error");
    }
  };

  return (
    <div className="container feedbackContainer">
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
      <div className="row feedbackHeadTextRow">
        <div className="col-12 col-sm-6 feedbackHeadTextCol">
          <span>Feedback</span>
        </div>
      </div>
      <div className="row feedbackMainTextRow">
        <div className="col-11 col-sm-10 feedbackMainTextCol">
          <p>
            Hi <span id="buddyFeedback">{name}</span>
            <img
              className="feedbackMainTextGif"
              src="gif/person_raising_hand.gif"
              alt="person_raising_hand"
            />
            . How are You? I hope that you are doing all good. Send me your
            feedback about my portfolio website. You can also send your private
            message to me. Don't worry, It's totally secure and private. I shall
            be very happy to see your message. Whatever you want to say, Don't
            hesitate. Write your text below.
          </p>
        </div>
      </div>
      <div className="row feedbackFormRow">
        <div className="col-10 col-sm-6 feedbackFormCol">
          <form className="container feedbackForm">
            <div className="row textareaRow">
              <div className="col-12">
                <textarea
                  className="form-control"
                  id="feedback"
                  placeholder="Type your message here"
                  rows="6"
                  autoFocus="on"
                  value={message}
                  onChange={handleMessage}
                />
              </div>
            </div>

            <div className="row buttonRow">
              <div className="col-6">
                <button
                  type="submit"
                  className="btn"
                  onClick={handleMessageSubmit}
                >
                  Send Me
                </button>
              </div>
            </div>
            <div className="row feedbackFormLastText">
              <div className="col-12">
                <span>
                  Want to know more? &nbsp;
                  <span id="lastTextSignup">
                    <NavLink to="/about">About Me</NavLink>
                  </span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Feedback);
