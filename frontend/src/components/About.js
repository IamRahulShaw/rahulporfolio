import React from "react";

function About({ name }) {
  return (
    <div className="container aboutContainer">
      <div className="row aboutHeadTextRow">
        <div className="col-12 aboutHeadTextCol">
          <span>About Me</span>
        </div>
      </div>
      <div className="row aboutMainTextRow">
        <div className="container aboutMainTextContainer">
          <div className="row topTextRow">
            <div className="col-12 col-md-10 topTextCol">
              <span>
                Hi <span id="aboutBuddy">{name}</span>
                <img
                  className="aboutMainTextGif"
                  src="gif/cowboy_hat_face.gif"
                  alt="cowboy_hat_face"
                />
              </span>
            </div>
          </div>
          <div className="row mainTextRow">
            <div className="col-12 col-md-8 mainTextCol">
              <p>
                <img
                  className="aboutMainTextGif"
                  src="gif/rocket.gif"
                  alt="rocket"
                />
                <span>
                  I am Rahul Shaw. I am a fullstack MERN Developer. I am good at
                  HTML, CSS, JavaScript, NodeJS, React, MongoDB. I also familiar
                  with frameworks like BootStrap and version control system like
                  git. Check out my{" "}
                  <a
                    href="https://github.com/IamRahulShaw"
                    target="_blank"
                    rel="noreferrer"
                    id="githubTextLink"
                  >
                    Github
                  </a>{" "}
                  account for more information.
                </span>
              </p>
              <p>
                <img
                  className="aboutMainTextGif"
                  src="gif/eyes.gif"
                  alt="eyes"
                />
                <span>
                  I completed my secondary and higher secondary education from
                  Ramakrishna Vivekananda Mission Vidyabhawan. I went to Kalyani
                  Government Engineering College for Computer Science
                  Engineering.
                </span>
              </p>
              <p>
                <img
                  className="aboutMainTextGif"
                  src="gif/fire.gif"
                  alt="fire"
                />
                <span>
                  You can connect with me in various platforms like{"  "}
                  <a
                    href="https://www.facebook.com/RahulShaw001/"
                    target="_blank"
                    rel="noreferrer"
                    id="facebook"
                  >
                    <span
                      className="iconify"
                      data-icon="akar-icons:facebook-fill"
                    ></span>
                    Facebook
                  </a>
                  ,{" "}
                  <a
                    href="https://www.instagram.com/rahul._.shaw/"
                    target="_blank"
                    rel="noreferrer"
                    id="instagram"
                  >
                    <span
                      className="iconify"
                      data-icon="ant-design:instagram-filled"
                    ></span>
                    Instagram
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/iamrahulshaw/"
                    target="_blank"
                    rel="noreferrer"
                    id="linkedin"
                  >
                    <span
                      className="iconify"
                      data-icon="akar-icons:linkedin-fill"
                    ></span>
                    LinkedIn
                  </a>
                  ,{" "}
                  <a
                    href="https://github.com/IamRahulShaw"
                    target="_blank"
                    rel="noreferrer"
                    id="github"
                  >
                    <span
                      className="iconify"
                      data-icon="akar-icons:github-fill"
                    ></span>
                    Github
                  </a>
                  . Click on the links to reach me out.
                </span>
              </p>
              <p>
                <img
                  className="aboutMainTextGif"
                  src="gif/direct_hit.gif"
                  alt="direct_hit"
                />
                <span>
                  I am very fond of startups and entrepreneurship. I am also a
                  tech enthusiast and science lover.
                </span>
              </p>
              <p>
                <img
                  className="aboutMainTextGif"
                  src="gif/musical_notes.gif"
                  alt="musical_notes"
                />
                <span>
                  In my leisure time, I like to watch movies and listen to
                  music. I am also a sports fan. I love to play cricket and
                  badminton. Above all, I have to mention it that I am also
                  passionate about cooking. My favourite food is Biriyani 😋.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(About);
