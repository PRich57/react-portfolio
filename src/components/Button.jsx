import React from "react";
import '../index.css';

function Button({ content, icon = '', color = 'blue' }) {
  return (
    <button className={`${color}`}>
      {content} {icon}
    </button> 
  )
}

export default Button;