import React from "react";
import devRow from "/src/assets/dev-row-records.png";
import gameSeekers from "/src/assets/gameSeekersScreenshot.png";
import weatherDash from "/src/assets/weather-dashboard-screenshot.png";
import blurb from "/src/assets/blurb.png";
import Project from "../components/Project";
import useMousePosition from "../utils/mousePosition";
import "../styles/components/Portfolio.css";

function Projects() {

  const mousePosition = useMousePosition();

  // Create projectData array of objects to insert values for each project card
  const projectData = [
    {
      title: `Blurb: Social Media App`,
      description: `Blurb is a dynamic and interactive micro-blogging platform that empowers users to share their thoughts, ideas, and stories in bite-sized messages called 'Blurbs.' With a character limit tailored for brevity, Blurb enables users to express themselves concisely, engaging in real-time conversations with a global community of like-minded individuals.`,
      liveLink: `https://blurb4-web-6d7dbae39646.herokuapp.com/`,
      repoLink: `https://github.com/ljkahn/Blurb`,
      imgSrc: blurb,
    },
    {
      title: `Dev Row Records`,
      description: `Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.`,
      liveLink: `https://dev-row-records-63d750921ea0.herokuapp.com/`,
      repoLink: `https://github.com/PRich57/dev-row-records`,
      imgSrc: devRow,
    },
    {
      title: "Game Seekers",
      description: `Welcome to GAME SEEKERS, your one-stop destination for discovering new and exciting video games tailored to your preferences! Whether you're a hardcore gamer, a casual player, or just looking for your next gaming adventure, this application has got you covered.`,
      liveLink: `https://ljkahn.github.io/videoGameProj/`,
      repoLink: `https://github.com/ljkahn/videoGameProj`,
      imgSrc: gameSeekers,
    },
    {
      title: `Weather Dashboard`,
      description: `This Weather Dashboard aims to provide the user with a free and easy-to-use weather application. The app will display the current weather and a 5-day forecast of any city the user would like to view. This web application was designed to maximize viewing comfort on mobile and desktop browsers.`,
      liveLink: `https://prich57.github.io/weather-dashboard/`,
      repoLink: `https://github.com/PRich57/weather-dashboard`,
      imgSrc: weatherDash,
    },
  ];

  return (
    <>
      <div>
        <img
          src="https://simpleicons.now.sh/javascript/F7DF1E"
          alt="JavaScript"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/react/FF4154"
          alt="React"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/mongodb/47A248"
          alt="MongoDB"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/bootstrap/7952b3"
          alt="Bootstrap"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/express/ffffff"
          alt="express"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/nodedotjs/339933"
          alt="Node.js"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/graphql/e10098"
          alt="GraphQL"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/apollographql/2196f0"
          alt="Apollo"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/mysql/4479a1"
          alt="mysql"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/npm/cb3837"
          alt="npm"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/vite/646cff"
          alt="vite"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/heroku/430098"
          alt="Heroku"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/netlify/00C7B7"
          alt="Netlify"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/insomnia/4000BF"
          alt="Insomnia"
          width="40"
          height="40"
          className="tech-icons"
        />
        <img
          src="https://simpleicons.now.sh/mui/007fff"
          alt="MUI"
          width="40"
          height="40"
          className="tech-icons"
        />
      </div>
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
      {/* <h3>{JSON.stringify(mousePosition)}</h3> */}
    </>
  );
}

export default Projects;
