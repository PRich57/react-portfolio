import React from "react";
import { resumeSkills } from "../../utils/resumeUtils/resumeSkills";

// Functional component for rendering skills
const Skills = () => {
  // Function to generate skills based on skill category and individual skills
  const generateSkills = () => {
    return resumeSkills.map((skillCategory, index) => (
      <div key={index} className="skills-container">
        <ul className="resumeList">
        {skillCategory.skills.map((softSkill, softSkillIndex) => (
          <li
            className="resumeItem"
            data-skill={softSkill.replace(/\s+/g, '-').toLowerCase().replace(/&/g, 'and').toLowerCase()}
            key={softSkill + softSkillIndex}
          >
            {softSkill}
          </li>
        ))}
        </ul>
      </div>
    ));
  };

  return <>{generateSkills()}</>;
};

export default Skills;
