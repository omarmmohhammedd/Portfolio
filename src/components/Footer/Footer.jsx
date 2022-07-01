import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='icons'>
        <a
          href='https://www.linkedin.com/in/omar-mohammed-756b14241'
          target={"_blank"}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://github.com/omarmmohhammedd' target={"_blank"}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://twitter.com/omar__naguib' target={"_blank"}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href='https://www.facebook.com/omarmmohhammedd/' target={"_blank"}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <p>&copy; 2022 PORTFOLIO.com </p>
    </div>
  );
};

export default Footer;
