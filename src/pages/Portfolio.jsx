import React from 'react';
import devRow from '/src/assets/dev-row-records.png';
import gameSeekers from '/src/assets/gameSeekersScreenshot.png';
import weatherDash from '/src/assets/weather-dashboard-screenshot.png';
import blurb from '/src/assets/blurb.png';
import Project from '../components/Project';
import "../styles/components/Portfolio.css";

function Projects() {
  // Create projectData array of objects to insert values for each project card
  const projectData = [
    {
      title: `Blurb: Social Media App`,
      description: `Blurb is a dynamic and interactive micro-blogging platform that empowers users to share their thoughts, ideas, and stories in bite-sized messages called 'Blurbs.' With a character limit tailored for brevity, Blurb enables users to express themselves concisely, engaging in real-time conversations with a global community of like-minded individuals.`,
      liveLink: `https://blurb4-web-6d7dbae39646.herokuapp.com/`,
      repoLink: `https://github.com/ljkahn/Blurb`,
      imgSrc: blurb
    },
    {
      title: `Dev Row Records`,
      description: `Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.`,
      liveLink: `https://dev-row-records-63d750921ea0.herokuapp.com/`,
      repoLink: `https://github.com/PRich57/dev-row-records`,
      imgSrc: devRow
    },
    {
      title: 'Game Seekers',
      description: `Welcome to GAME SEEKERS, your one-stop destination for discovering new and exciting video games tailored to your preferences! Whether you're a hardcore gamer, a casual player, or just looking for your next gaming adventure, this application has got you covered.`,
      liveLink: `https://ljkahn.github.io/videoGameProj/`,
      repoLink: `https://github.com/ljkahn/videoGameProj`,
      imgSrc: gameSeekers
    },
    {
      title: `Weather Dashboard`,
      description: `This Weather Dashboard aims to provide the user with a free and easy-to-use weather application. The app will display the current weather and a 5-day forecast of any city the user would like to view. This web application was designed to maximize viewing comfort on mobile and desktop browsers.`,
      liveLink: `https://prich57.github.io/weather-dashboard/`,
      repoLink: `https://github.com/PRich57/weather-dashboard`,
      imgSrc: weatherDash
    },
  ]

    return (
    <>
      <div className="projects">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
      <h2 id="projects">Projects</h2>
    </>
  );
}

export default Projects;