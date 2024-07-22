import { useState, useEffect } from "react";

const useMousePosition = () => {
  // The mousePosition state stores the x and y coordinates of the mouse
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  
  // Effect for running the function whenever the component mounts and any change in dependency array 
  useEffect(() => {
    // Function to handle mousemove event
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Event listener to window obj for mousemove event
    window.addEventListener('mousemove', updateMousePosition);

    // Cleanup function to remove event listener from window obj when component unmounts or dependency array changes
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Returns current mousePosition state
  return mousePosition;
};

export default useMousePosition;