import React from "react";
import Card from 'react-bootstrap/Card';
import { Github, Window } from 'react-bootstrap-icons';

const Project = ({ title, description, liveLink, repoLink, imgSrc }) => (
  <Card style={{ width: '35rem'}}>
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <span data-info="Visit the app">
            <Window className='card-icons' color="white" size={50} />
        </span>
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <span data-info="Visit the Repo">
          <Github className='card-icons' color="white" size={50} />
        </span>
      </a>
    </Card.Body>
  </Card>
);

export default Project;