import React from "react";
import "../styles/index.css";
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Starter() {
  const [fontSize, setFontSize] = useState('3rem');
  const [textColor, setTextColor] = useState('rgb(107, 110, 204)')

  return (
    <>
      <div className="text"
        style= {{
          fontSize: fontSize,
          color: textColor,
          paddingBottom: '1rem',
          paddingTop: '1rem'
        }}
      >
        <TypeAnimation 
          splitter={(str) => str.split(/(?=)/)}
          sequence={[
            `\nWelcome to my Portfolio!`,
            3000, 
            ``
          ]}
          speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
          cursor={false}
          omitDeletionAnimation={true}
        />
        <TypeAnimation 
          splitter={(str) => str.split(/(?=)/)}
          sequence={[
            5000, 
            `\n`,
            () => setTextColor('#ffffff'),
            () => setFontSize('2rem'),
            `\nCheck out my Projects!`,
            3000,
            `\nCheck out my Resume!`,
            3000,
            `\nCheck out my Story!`,
            3000,
            `\nCheck out my GitHub!`,
            3000,
            `\nLets connect!`
          ]}
          speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
          cursor={false}
          omitDeletionAnimation={false}
        />
      </div>
      {/* <div className="image">
        <img src="../src/assets/linkedin_profile_pic.jpg" alt="Picture of Pete" />
      </div> */}
    </>
  );
}

export default Starter;
