import React from "react";

function Project() {
  return (
    <div className="container projectContainer">
      <div className="row projectHeadRow">
        <div className="col-12 projectHeadCol">
          <span>Projects</span>
        </div>
      </div>
      <div className="row projectMainRow">
        <div className="container projectMainContainer">
          <div className="row cardRow">
            <div className="col-11 col-lg-5 cardCol">
              <div className="card">
                <img
                  src="img/weatherApp.png"
                  className="card-img-top"
                  alt="weatherApp"
                />
                <div className="card-body">
                  <h5 className="card-title">Weather App</h5>
                  <p className="card-text">
                    This is a weather web-app. You can check the live weather of
                    any place in the world. You can also get the windspeed,
                    humidity, precipitation and pressure of that place. The
                    current date and time of that place is also displayed.
                  </p>
                  <div className="row buttonRow">
                    <div className="col-6 buttonCol">
                      <a
                        href="https://github.com/IamRahulShaw/weather-app"
                        target="_blank"
                        rel="noreferrer"
                        className="btn github"
                      >
                        Github
                        <span
                          className="iconify"
                          data-icon="akar-icons:arrow-down-right"
                          data-rotate="270deg"
                        ></span>
                      </a>
                    </div>
                    <div className="col-6 buttonCol">
                      <a
                        href="https://iamrahulshaw.github.io/weather-app/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn demo"
                      >
                        Demo
                        <span
                          className="iconify"
                          data-icon="akar-icons:arrow-down-right"
                          data-rotate="270deg"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-11 col-lg-5 cardCol">
              <div className="card">
                <img
                  src="img/KeepYourNotes.png"
                  className="card-img-top"
                  alt="KeepYourNotes"
                />
                <div className="card-body">
                  <h5 className="card-title">Keep Your Notes</h5>
                  <p className="card-text">
                    This is the web application for keeping your short notes.
                    Here you can edit, copy and delete your notes. You can use
                    it as your instant short notes or list taking notebook. You
                    can get your notes back even after closing the window of the
                    browser. So, you can refer to it anytime.
                  </p>
                  <div className="row buttonRow">
                    <div className="col-6 buttonCol">
                      <a
                        href="https://github.com/IamRahulShaw/keep-your-notes"
                        target="_blank"
                        rel="noreferrer"
                        className="btn github"
                      >
                        Github
                        <span
                          className="iconify"
                          data-icon="akar-icons:arrow-down-right"
                          data-rotate="270deg"
                        ></span>
                      </a>
                    </div>
                    <div className="col-6 buttonCol">
                      <a
                        href="https://iamrahulshaw.github.io/keep-your-notes/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn demo"
                      >
                        Demo
                        <span
                          className="iconify"
                          data-icon="akar-icons:arrow-down-right"
                          data-rotate="270deg"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Project);
