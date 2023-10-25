import React from "react";
import "../styles/sections/Starter.scss";
import Button from "../components/Button";
import { useState } from 'react';
import { HiOutlineArrowLongDown, HiEnvelope } from "react-icons/hi2";
import { TypeAnimation } from 'react-type-animation';

function Starter() {
  const [fontSize, setFontSize] = useState('3rem');
  const [textColor, setTextColor] = useState('rgb(107, 110, 204)')
  const envelope = <HiEnvelope />
  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <h1>Pete Richards
          </h1>
            <div 
              style= {{
                fontSize: fontSize,
                color: textColor,
                paddingBottom: '2rem',
                paddingTop: '0'
              }}
            >
              <TypeAnimation 
                sequence={[
                  ``,
                  1000, 
                  () => setTextColor('#ffffff'),
                  () => setFontSize('2rem'),
                  `\nWelcome to my Portfolio`
                ]}
                speed={30}
                cursor={false}
                omitDeletionAnimation={true}
              />
            </div>
          <div className="button-container">
            <Button
              content="Menu"
              icon={<HiOutlineArrowLongDown />}
              color="pink"
            />
            <Button content='Contact  &nbsp;' icon={<HiEnvelope />} />
          </div>
        </div>
        <div className="image">
          <img src="../src/assets/linkedin_profile_pic.jpg" alt="React Icon" />
        </div>
      </div>
    </div>
  );
}

export default Starter;


{/* <TypeAnimation 
sequence={[
  `Pete Richards`,
  2000,
]}
speed={30}
cursor={false}
style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
omitDeletionAnimation={true}
/> */}