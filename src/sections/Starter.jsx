import React from "react";
import "../styles/sections/Starter.scss";
import Button from "../components/Button";
import { useState } from 'react';
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from 'react-type-animation';

function Starter() {
  const [fontSize, setFontSize] = useState('3rem');
  const [textColor, setTextColor] = useState('rgb(107, 110, 204)')

  return (
    <div className="main-container">
      <div className="container">
        <div className="content">
          <h1 
            style= {{
              fontSize: fontSize,
              color: textColor
            }}
          >
            <TypeAnimation 
              sequence={[
                `Pete Richards`,
                1000, 
                () => setTextColor('#f32a8f'),
                () => setFontSize('2rem'),
                `React Practice`
              ]}
              speed={30}
              cursor={false}
              omitDeletionAnimation={true}
            />
          </h1>
          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
              color="pink"
            />
          </div>
        </div>
        <div className="image">
          <img src="../src/assets/react.svg" alt="React Icon" />
        </div>
      </div>
    </div>
  );
}

export default Starter;


<TypeAnimation 
sequence={[
  `Pete Richards`,
  2000,
]}
speed={30}
cursor={false}
style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
omitDeletionAnimation={true}
/>