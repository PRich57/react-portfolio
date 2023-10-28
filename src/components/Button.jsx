import React from "react";
import '../styles/index.css';

function Button({ content, icon = '', color = 'blue', className }) {
  return (
    <button className={`${color} ${className}`}>
      {content} {icon}
    </button> 
  )
}

export default Button;