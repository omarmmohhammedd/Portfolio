import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [toggle, Settoggle] = useState(false);
  const Location = useLocation();
  useEffect(() => {
    Settoggle(false);
  }, [Location]);
  return (
    <div className='navbar' id={toggle ? "open" : "close"}>
      <div className='Links'>
        <Link to={"/"}>Home</Link>
        <Link to={"/project"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
      <div className='toggleBtnCon'>
        <FontAwesomeIcon
          icon={faBars}
          id='toggleBtn'
          onClick={() => {
            Settoggle(!toggle);
          }}
        />
        <div></div>
      </div>
    </div>
  );
};

export default Header;
