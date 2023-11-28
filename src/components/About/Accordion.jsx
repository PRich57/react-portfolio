import { useState } from "react";
import { aboutInfo } from '../../utils/aboutInfo.js';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  // This state keeps track of the currently clicked item
  const [clicked, setClicked] = useState(0);

  // Handle toggle behavior for the accordion items
  const handleToggle = (i) => {
    if (clicked === i) {
      // If already clicked, close it by setting clicked state to null
      return setClicked(null);
    }
    // If not clicked, open by setting clicked state to its index 
    setClicked(i);
  };

  return (
    <ul className="accordion">
      {/* Iterate over aboutInfo and render AccordionItem for each item */}
      {aboutInfo.map((info, i) => (
        <AccordionItem 
        // Pass handleToggle function as the onToggle prop for each AccordionItem
        onToggle={() => handleToggle(i)}
        // Pass current clicked state as the active prop for each
        active={clicked === i}
        // Use the index as the key for each
        key={i} 
        // Pass the current info obj as info prop
        info={info} />
      ))}
    </ul>
  );
};

export default Accordion;
