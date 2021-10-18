import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import anime from "animejs/lib/anime.es.js";
import { NavLink } from "react-router-dom";

function Home({ name, status }) {
  useEffect(() => {
    var morph1 = anime({
      targets: ".morphPath",
      d: [
        {
          value:
            "M148.9 -156.4C186.1 -111.7 204.5 -55.9 212 7.4C219.4 70.7 215.8 141.4 178.6 166.4C141.4 191.4 70.7 170.7 16.1 154.6C-38.4 138.4 -76.8 126.8 -104.5 101.8C-132.2 76.8 -149.1 38.4 -161 -11.9C-172.9 -62.2 -179.8 -124.5 -152.1 -169.1C-124.5 -213.8 -62.2 -240.9 -3.2 -237.7C55.9 -234.5 111.7 -201.1 148.9 -156.4",
        },
        {
          value:
            "M188.6 -184.9C235.8 -141.4 259.4 -70.7 241.7 -17.7C224 35.4 165 70.7 117.9 105C70.7 139.4 35.4 172.7 -7.7 180.4C-50.7 188 -101.4 170 -128.4 135.7C-155.4 101.4 -158.7 50.7 -155.8 2.8C-153 -45 -144 -90 -117 -133.5C-90 -177 -45 -219 12.8 -231.9C70.7 -244.7 141.4 -228.4 188.6 -184.9",
        },
      ],
      duration: 3000,
      easing: "easeOutQuad",
      direction: "alternate",
      autoplay: true,
      elasticity: 100,
      loop: true,
    });
  }, []);
  return (
    <div className="container" id="homeMaindiv">
      <div className="row">
        <div className="col-12 col-lg-6 leftText">
          <div className="container">
            <div className="row" id="firstLine">
              <div className="col">
                <span id="hi">Hi </span>
                <span id="buddy">{name}</span>
              </div>
            </div>
            <div className="row" id="secondLine">
              <div className="col">
                <span id="iam1">I am </span>
                <span id="rahul">RAHUL</span>
              </div>
            </div>
            <div className="row" id="thirdLine">
              <div className="col">
                <span id="iam2">I am a &nbsp;</span>
                <span>
                  <Typewriter
                    id="typewriter"
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1000)
                        .typeString("Frontend Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("MERN Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Tech Enthusiast")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="row" id="fourthLine">
              <div className="col">
                {status ? (
                  <span>
                    Send me <NavLink to="/feedback">message</NavLink>
                  </span>
                ) : (
                  <span>
                    <NavLink to="/login">Login</NavLink>
                    &nbsp; to send me <NavLink to="/feedback">message</NavLink>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 rightPhoto">
          <div className="row">
            <div className="col" id="imgOuterDiv">
              <svg
                className="photo-svg"
                id="visual-1"
                viewBox="220 60 450 450"
                width="450"
                height="450"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g transform="translate(428.13225988742806 329.96267486903093)">
                  <path
                    className="morphPath"
                    d="M148.9 -156.4C186.1 -111.7 204.5 -55.9 212 7.4C219.4 70.7 215.8 141.4 178.6 166.4C141.4 191.4 70.7 170.7 16.1 154.6C-38.4 138.4 -76.8 126.8 -104.5 101.8C-132.2 76.8 -149.1 38.4 -161 -11.9C-172.9 -62.2 -179.8 -124.5 -152.1 -169.1C-124.5 -213.8 -62.2 -240.9 -3.2 -237.7C55.9 -234.5 111.7 -201.1 148.9 -156.4"
                    fill="#AAB7B8"
                  ></path>
                </g>
              </svg>
              <img id="myPhoto" src="img/myPhoto.png" alt="myPhoto" />
            </div>
          </div>
          <div className="row" id="textLineImg">
            <div className="col">
              <span>
                want to see my &nbsp;
                <NavLink to="/project">projects</NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
