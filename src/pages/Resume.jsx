import React, { useState } from "react";
import pdf from "/src/assets/resume.pdf";
import "../styles/components/Resume.css";
import { Download } from "react-bootstrap-icons";
import Button from "../components/Button";
import ResumeIcon from "../components/resumeIcon";
import { resumeIcons } from "../utils/resumeIcons";

export default function Resume() {
  const [hiddenWord, setHiddenWord] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e) => {
    setHiddenWord(e.target.getAttribute("data-info"));
    const rect = e.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.bottom + window.scrollY, // position below the image
      left: rect.left + window.scrollX + (rect.width / 2) // horizontally centered
    });
  }

  const handleMouseLeave = () => {
    setHiddenWord('');
  }

  return (
    <>
      <div className="acrossBottom">
        <h4 className="resumeSections">Technologies</h4>
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
            className="techTooltip"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`
            }}
          >
            {hiddenWord}
          </div>
        )}
      </div>
      <div className="resume">
        <div className="left">
          <h4 className="resumeSections">Relevant Experience</h4>
          <div className="resumeContent">
            <ul className="resumeList">
              <li className="resumeItem">content</li>
              <li>
                more contentdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                </li>
            </ul>
          </div>
          <h4 className="resumeSections">Skills</h4>
          <div className="resumeContent">
            <ul className="resumeList">
              <li className="resumeItem">content</li>
              <li>
                more contentdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h4 className="resumeSections">Education</h4>
          <div className="resumeContent">
            <ul className="resumeList">
              <li className="resumeItem">content</li>
              <li>
                more contentdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              </li>
            </ul>
          </div>
          <h4 className="resumeSections">Achievements</h4>
          <div className="resumeContent">
            <ul className="resumeList">
              <li className="resumeItem">content</li>
              <li>
                more contentdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              </li>
            </ul>
          </div>
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
