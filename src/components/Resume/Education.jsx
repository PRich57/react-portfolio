import React from "react";
import { resumeEducation } from "../../utils/resumeUtils/resumeEducation";

const Education = () => {
  const generateEducation = () => {
    return resumeEducation.map((education, index) => (
      <div key={index} className="edu-container">
        <h5 className="edu-school">{education.school}</h5>
        <div className="edu-headers">
          <h3 className="edu-degree">{education.degree}</h3>
          {education.minor &&
          <h3 className="edu-minor">Minor in {education.minor}</h3>
          }
          <h3 className="edu-location">{education.location}</h3>
          <h3 className="edu-date">{education.startYear} - {education.endYear}</h3>
        </div>
      </div>
    ));
  };

  return (
    <>
      {generateEducation()}
    </>
  );
};

export default Education;
