import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
const Home = () => {
  const [animation, setAnimation] = useState(false);
  const [scrollbtn, Setscrollbtn] = useState(false);
  window.onscroll = () => {
    if (window.pageYOffset > 400) {
      Setscrollbtn(true);
    } else {
      Setscrollbtn(false);
    }
  };
  window.onscroll = function () {
    if (window.pageYOffset >= 285) {
      setAnimation(true);
      console.log(animation);
    }
  };
  return (
    <div className='Home'>
      <div className='about'>
        <h1 className='about-header'>Hello , My Name Is Omar </h1>
        <div className='about-Des'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "A Full Stack Developer <br/> With Passion For Learing And Creating"
                )
                .start();
            }}
          />
        </div>
        <div className='icons'>
          <a
            href='https://www.linkedin.com/in/omar-mohammed-756b14241'
            target={"_blank"}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/omarmmohhammedd' target={"_blank"}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className='skills' id={animation && "animation"}>
        <h1>Skills</h1>
        <ul>
          <li>
            <h2>Front-End</h2>
            <span>
              {" "}
              HTML || CSS || JavaScript || BootStrap || React js || Redux ||
              FontAwesome{" "}
            </span>
          </li>
          <li>
            <h2>Back-End</h2>
            <span> Python || Django || MySQL || Postgre DB || AWS</span>
          </li>
          <li>
            <h2>Language</h2>
            <span> JavaScript || Python || TypeScript</span>
          </li>
        </ul>
      </div>

      <button
        className='topbtn'
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        id={scrollbtn ? "show" : "hidden"}>
        <FontAwesomeIcon icon={faArrowUpLong} />
      </button>
    </div>
  );
};

export default Home;
