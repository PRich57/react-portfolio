import React, { useCallback, useRef } from "react";
import Card from "react-bootstrap/Card";
import { Github, Window } from "react-bootstrap-icons";

// Create Project component to insert into the portfolio page
const Project = ({ title, description, liveLink, repoLink, imgSrc }) => {
  // Create reference to the card component
  const cardRef = useRef(null);

  // Function to update card tilt based on mouse movement
  const updateTilt = useCallback((e) => {
    const card = cardRef.current;
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const rotateX = deltaY / -60;
    const rotateY = deltaX / 30; 

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseMove = (e) => {
    updateTilt(e);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

return (
  <Card 
    ref={cardRef} 
    style={{ width: "35rem", transition: "transform 0.2s ease" }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    >
    <Card.Img variant="top" src={imgSrc} className="img-fluid" />
    <Card.Body>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <Card.Title>{title}</Card.Title>
      </a>
      <Card.Text>{description}</Card.Text>
      <div className="icon-container">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <span data-info="Visit the app" className="expand tooltip">
            <Window className="card-icons" color="white" size={50} />
          </span>
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <span data-info="Visit the Repo" className="expand tooltip">
            <Github className="card-icons" color="white" size={50} />
          </span>
        </a>
      </div>
    </Card.Body>
  </Card>
  )
};

export default Project;
