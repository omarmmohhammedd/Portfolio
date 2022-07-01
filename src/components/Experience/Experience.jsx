import React, { useState } from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  const [animation, setAnimation] = useState(false);
  window.onscroll = function () {
    if (window.pageYOffset >= 285) {
      setAnimation(true);
      console.log(animation);
    }
  };
  return (
    <div className='experience' id={animation && "animation"}>
      <h1 className='experience-header'>Experience</h1>
      <div className='Vertical-Line'></div>
      <div className='row row-1'>
        <div className='Sec'>
          <FontAwesomeIcon icon={faGraduationCap} id='icon1' />
          Higher Technological Institute - 10th of Ramadan -Computer Science{" "}
          <div className='DES'>Bachelor degree</div>
        </div>
      </div>
      <div className=' row row-2'>
        <div className='Sec'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius
          facilis, quibusdam, ipsam ut nemo, dolorum illo cum quaerat numquam
          expedita vitae? Maxime quos consequuntur sed ut iste consectetur
          tenetur.
          <FontAwesomeIcon icon={faGraduationCap} id='icon2' />
          <div className='DES'>Bachelor degree</div>
        </div>
      </div>
      <div className=' row row-3'>
        <div className='Sec'>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius
          facilis, quibusdam, ipsam ut nemo, dolorum illo cum quaerat numquam
          expedita vitae? Maxime quos consequuntur sed ut iste consectetur
          tenetur.
          <FontAwesomeIcon icon={faGraduationCap} id='icon3' />
          <div className='DES'>Bachelor degree</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
