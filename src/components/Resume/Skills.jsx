import React from "react";
import { resumeSkills } from "../../utils/resumeUtils/resumeSkills";

const Skills = () => {
  const generateSkills = () => {
    return resumeSkills.map((skill, index) => (
      <div key={index} className="skills-container">
        {/* <h5>{skill.title}</h5> */}
        {skill.languages && skill.languages.map((language) => (
          <div key={language.type}>
            <h6>{language.type}</h6>
            <ul className="resumeList">
              {language.skills.map((skillName) => (
                <li className="resumeItem" key={language.type + skillName}>{skillName}</li>
              ))}
            </ul>
          </div>
        ))}
        {skill.tools && skill.tools.map((tool) => (
          <div key={tool.type}>
            <h6>{tool.type}</h6>
            <ul className="resumeList">
              {tool.skills.map((skillName) => (
                <li className="resumeItem" key={tool.type + skillName}>{skillName}</li>
              ))}
            </ul>
          </div>
        ))}
        {skill.skills && (
          <ul className="resumeList">
            {skill.skills.map((softSkill, softSkillIndex) => (
              <li className="resumeItem" key={softSkill + softSkillIndex}>{softSkill}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <>
      {generateSkills()}
    </>
  );
};

export default Skills;
