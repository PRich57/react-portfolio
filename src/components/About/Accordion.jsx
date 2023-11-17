import { useState } from "react";
import { aboutInfo } from '../../utils/aboutInfo.js';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (i) => {
    if (clicked === i) {
      return setClicked("0");
    }
    setClicked(i);
  };

  console.log(aboutInfo);

  return (
    <ul className="accordion">
      {aboutInfo.map((info, i) => (
        <AccordionItem 
        onToggle={() => handleToggle(i)}
        active={clicked === i}
        key={i} info={info} />
      ))}
    </ul>
  );
};

export default Accordion;
