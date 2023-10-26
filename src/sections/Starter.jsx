import React from "react";
import "../styles/sections/Starter.css";
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Starter() {
  const [fontSize, setFontSize] = useState('3rem');
  const [textColor, setTextColor] = useState('rgb(107, 110, 204)')

  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <div 
            style= {{
              fontSize: fontSize,
              color: textColor,
              paddingBottom: '2rem',
              paddingTop: '0'
            }}
          >
            <TypeAnimation 
              splitter={(str) => str.split(/(?=)/)}
              sequence={[
                `\nWelcome to my Portfolio!`,
                1000, 
                () => setTextColor('#ffffff'),
                () => setFontSize('1.5rem'),
                `\nCheck out my projects`,
                1000,
                `\nCheck out my `
              ]}
              speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
              cursor={false}
              omitDeletionAnimation={true}
            />
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
