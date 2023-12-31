import React from "react";
import { resumeRelevantExp } from "../../utils/resumeUtils/resumeRelevantExp";

// Functional component for rendering relevant experience section
const RelevantExp = ({ onSkillEnter, onSkillLeave }) => {
  // Function to generate relevant experience items
  const generateRelevantExp = () => {
    return resumeRelevantExp.map((experience, index) => (
      <div key={index} className="exp-container">
        <h5 className="exp-company">{experience.company}</h5>
        <div className="exp-headers">
          <h3 className="exp-title">{experience.title}</h3>
          <h3 className="exp-location">{experience.location}</h3>
          <h3 className="exp-date">{experience.startDate} - {experience.endDate}</h3>
        </div>
        <ul className="experienceList">
          {experience.achievements && experience.achievements.map((achievement, aIndex) => (
            <li 
            className="experienceItem" 
            key={aIndex}
            onMouseEnter={() => onSkillEnter(achievement.relatedSkills)}
            onMouseLeave={() => onSkillLeave(achievement.relatedSkills)}
            >
              {achievement.description}
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <>
      {generateRelevantExp()}
    </>
  );
};

export default RelevantExp;
