import React from 'react';
import devRow from '../../public/assets/dev-row-records.png';
import gameSeekers from '../../public/assets/gameSeekersScreenshot.png';
import weatherDash from '../../public/assets/weather-dashboard-screenshot.png';
import noteTaker from '../../public/assets/note-taker.png';
import codeQuiz from '../../public/assets/code-quiz.png';
import wdScheduler from '../../public/assets/wdsScreenshot.png';
import Project from '../components/Project';
import "../styles/components/Portfolio.css";

function Projects() {
  // Create projectData array of objects to insert values for each project card
  const projectData = [
    {
      title: `Dev Row Records`,
      description: `Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.`,
      liveLink: `https://dev-row-records-63d750921ea0.herokuapp.com/`,
      repoLink: `https://github.com/PRich57/dev-row-records`,
      imgSrc: {devRow}
    },
    {
      title: 'Game Seekers',
      description: `Welcome to GAME SEEKERS, your one-stop destination for discovering new and exciting video games tailored to your preferences! Whether you're a hardcore gamer, a casual player, or just looking for your next gaming adventure, this application has got you covered.`,
      liveLink: `https://ljkahn.github.io/videoGameProj/`,
      repoLink: `https://github.com/ljkahn/videoGameProj`,
      imgSrc: {gameSeekers}
    },
    {
      title: `Weather Dashboard`,
      description: `This Weather Dashboard aims to provide the user with a free and easy-to-use weather application. The app will display the current weather and a 5-day forecast of any city the user would like to view. This web application was designed to maximize viewing comfort on mobile and desktop browsers.`,
      liveLink: `https://prich57.github.io/weather-dashboard/`,
      repoLink: `https://github.com/PRich57/weather-dashboard`,
      imgSrc: {weatherDash}
    },
    {
      title: `Note Taker`,
      description: `The Note Taker app is an intuitive and user-friendly application designed to help users organize their thoughts, ideas, and information in a seamless manner. Built with simplicity and efficiency in mind, this app provides a straightforward experience from the moment you open it.`,
      liveLink: `https://lit-eyrie-49322-e0487ec15df8.herokuapp.com/notes`,
      repoLink: `https://github.com/PRich57/note-taker`,
      imgSrc: {noteTaker}
    },
    {
      title: `Code Quiz`,
      description: `Code assessments are a common and important part of the interview process and the creation of this quiz allowed us, as boot camp students, to understand what we may face during interviews. More importantly, it gave us a multifaceted problem that we had to break down into smaller parts, solve piece by piece, and then reassemble to create the final product.`,
      liveLink: `https://prich57.github.io/code-quiz/`,
      repoLink: `https://github.com/PRich57/code-quiz`,
      imgSrc: {codeQuiz}
    },
    {
      title: `Work Day Scheduler`,
      description: `The purpose of the Work Day Schedular is to help users organize their work days with persistent storage. The schedular has time blocks for each hour from 9am to 5pm. Within each time block, users can type in tasks they have to accomplish, meetings they have to attend, or any other form of reminder to keep themselves organized.`,
      liveLink: `https://prich57.github.io/work-day-schedular/`,
      repoLink: `https://github.com/PRich57/work-day-schedular`,
      imgSrc: {wdScheduler}
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