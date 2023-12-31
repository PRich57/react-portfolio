import React from "react";

const ResumeIcon = ({ src, alt, data, handleMouseEnter, handleMouseLeave }) => (
  // Component for rendering icons on Resume page
  <img
    src={src}
    alt={alt}
    width="40"
    height="40"
    className="tech-icons"
    data-info={data}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    />
);

export default ResumeIcon;