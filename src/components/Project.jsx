import React from "react";
import Card from 'react-bootstrap/Card';
import { Github, Window } from 'react-bootstrap-icons';

// Create Project component to insert into the portfolio page
const Project = ({ title, description, liveLink, repoLink, imgSrc }) => (
  <Card style={{ width: '35rem'}}>
    <Card.Img variant="top" src={imgSrc} className="img-fluid" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <div className="icon-container">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <span data-info="Visit the app" className="expand tooltip">
              <Window className='card-icons' color="white" size={50} />
          </span>
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <span data-info="Visit the Repo" className="expand tooltip">
            <Github className='card-icons' color="white" size={50} />
          </span>
        </a>
      </div>
    </Card.Body>
  </Card>
);

export default Project;