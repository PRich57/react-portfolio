import React, { useState, useEffect } from "react";
import pdf from "/src/assets/resume.pdf";
import "../styles/components/Resume.css";
import { Download } from "react-bootstrap-icons";
import Button from "../components/Button";
import ResumeIcon from "../components/Resume/ResumeIcon";
import { resumeIcons } from "../utils/resumeUtils/resumeIcons";
import Skills from "../components/Resume/Skills"
import RelevantExp from "../components/Resume/RelevantExp";

export default function Resume() {
  const [hiddenWord, setHiddenWord] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);


  useEffect(() => {
    let interval;
    if (!isHovering) { 
      interval = setInterval(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === resumeIcons.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering]); 

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    setHiddenWord(e.target.getAttribute("data-info"));
    const rect = e.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.bottom + window.scrollY, 
      left: rect.left + window.scrollX + (rect.width / 2)
    });
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHiddenWord('');
  }

  useEffect(() => {
    const icon = resumeIcons[currentIndex];
    setHiddenWord(icon.data);
    const element = document.querySelector(`[data-info="${icon.data}"]`);
    if (element) {
      const rect = element.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX + (rect.width / 2)
      });
    }
  }, [currentIndex]);

  return (
    <>
      <div className="resume">
        <div className="left">
          <h4 className="resumeSections">Soft Skills</h4>
          <div className="resumeContent skills">
            <Skills/>
          </div>
        </div>
        <div className="right">
          <h4 className="resumeSections">Education</h4>
          <div className="resumeContent">
            <ul className="resumeList">
              <li className="resumeItem">content</li>
            </ul>
          </div>
          <h4 className="resumeSections">Achievements</h4>
          <div className="resumeContent">
            <ul className="resumeList">
              <li className="resumeItem">content</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resumeWide">
        <div className="acrossBottom">
          <h4 className="resumeSections">Technical Skills</h4>
          {resumeIcons.map((icon, index) => (
            <ResumeIcon
            key={index}
            src={icon.src}
            alt={icon.alt}
            data={icon.data}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            />
            ))}
          {hiddenWord && (
            <div
            className="techTooltip open"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
            }}
            >
              {hiddenWord}
            </div>
          )}
        </div>
        <h4 className="resumeSections">Relevant Experience</h4>
        <div className="resumeContent experience">
          <RelevantExp />
        </div>
      </div>
      <div className="button">
        <a href={pdf} target="_blank">
          <Button
            className="resumeBtn"
            content="Download PDF Version &nbsp;"
            icon={<Download />}
            size="lg"
          />
        </a>
      </div>
      <h2>Resume</h2>
    </>
  );
}
