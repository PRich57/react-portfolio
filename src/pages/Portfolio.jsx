import React from 'react';
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
      imgSrc: `../src/assets/dev-row-records.png`
    },
    {
      title: 'Game Seekers',
      description: `Welcome to GAME SEEKERS, your one-stop destination for discovering new and exciting video games tailored to your preferences! Whether you're a hardcore gamer, a casual player, or just looking for your next gaming adventure, this application has got you covered.`,
      liveLink: `https://ljkahn.github.io/videoGameProj/`,
      repoLink: `https://github.com/ljkahn/videoGameProj`,
      imgSrc: `../src/assets/gameSeekersScreenshot.png`
    },
    {
      title: `Weather Dashboard`,
      description: `This Weather Dashboard aims to provide the user with a free and easy-to-use weather application. The app will display the current weather and a 5-day forecast of any city the user would like to view. This web application was designed to maximize viewing comfort on mobile and desktop browsers.`,
      liveLink: `https://prich57.github.io/weather-dashboard/`,
      repoLink: `https://github.com/PRich57/weather-dashboard`,
      imgSrc: `../src/assets/weather-dashboard-screenshot.png`
    },
    {
      title: `Note Taker`,
      description: `The Note Taker app is an intuitive and user-friendly application designed to help users organize their thoughts, ideas, and information in a seamless manner. Built with simplicity and efficiency in mind, this app provides a straightforward experience from the moment you open it.`,
      liveLink: `https://lit-eyrie-49322-e0487ec15df8.herokuapp.com/notes`,
      repoLink: `https://github.com/PRich57/note-taker`,
      imgSrc: `../src/assets/note-taker.png`
    },
    {
      title: `Code Quiz`,
      description: `Code assessments are a common and important part of the interview process and the creation of this quiz allowed us, as boot camp students, to understand what we may face during interviews. More importantly, it gave us a multifaceted problem that we had to break down into smaller parts, solve piece by piece, and then reassemble to create the final product.`,
      liveLink: `https://prich57.github.io/code-quiz/`,
      repoLink: `https://github.com/PRich57/code-quiz`,
      imgSrc: `../src/assets/code-quiz.png`
    },
    {
      title: `Work Day Scheduler`,
      description: `The purpose of the Work Day Schedular is to help users organize their work days with persistent storage. The schedular has time blocks for each hour from 9am to 5pm. Within each time block, users can type in tasks they have to accomplish, meetings they have to attend, or any other form of reminder to keep themselves organized.`,
      liveLink: `https://prich57.github.io/work-day-schedular/`,
      repoLink: `https://github.com/PRich57/work-day-schedular`,
      imgSrc: `../src/assets/wdsScreenshot.png`
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

      {/* <Card style={{ width: '35rem' }}>
        <Card.Img variant="top" src="../src/assets/dev-row-records.png" />
        <Card.Body>
          <Card.Title>Dev Row Records</Card.Title>
          <Card.Text>
            Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.
          </Card.Text>
          <a href="https://dev-row-records-63d750921ea0.herokuapp.com/" target="_blank">
            <span data-info="Visit the app">
              <Window className='card-icons' color="white" size={50} />
            </span>
          </a>
          <a href="https://github.com/PRich57/dev-row-records" target="_blank">
            <span data-info="Visit the Repo">
              <Github className='card-icons' color="white" size={50} />
            </span>
          </a>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: '35rem'}}>
        <Card.Img variant="top" src="../src/assets/gameSeekersScreenshot.png" />
        <Card.Body>
          <Card.Title>Game Seekers</Card.Title>
          <Card.Text>
          Welcome to GAME SEEKERS, your one-stop destination for discovering new and exciting video games tailored to your preferences! Whether you're a hardcore gamer, a casual player, or just looking for your next gaming adventure, this application has got you covered.
          </Card.Text>
          <a href="https://ljkahn.github.io/videoGameProj/" target="_blank">
            <span data-info="Visit the app">
              <Window className='card-icons' color="white" size={50} />
            </span>
          </a>
          <a href="https://github.com/ljkahn/videoGameProj" target="_blank">
            <span data-info="Visit the Repo">
              <Github className='card-icons' color="white" size={50} />
            </span>
          </a>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: '35rem'}}>
        <Card.Img variant="top" src="../src/assets/weather-dashboard-screenshot.png" />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
          This Weather Dashboard aims to provide the user with a free and easy-to-use weather application. The app will display the current weather and a 5-day forecast of any city the user would like to view. This web application was designed to maximize viewing comfort on mobile and desktop browsers.
          </Card.Text>
          <a href="https://prich57.github.io/weather-dashboard/" target="_blank">
            <span data-info="Visit the app">
              <Window className='card-icons' color="white" size={50} />
            </span>
          </a>
          <a href="https://github.com/PRich57/weather-dashboard" target="_blank">
            <span data-info="Visit the Repo">
              <Github className='card-icons' color="white" size={50} />
            </span>
          </a>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: '35rem'}}>
        <Card.Img variant="top" src="../src/assets/note-taker.png" />
        <Card.Body>
          <Card.Title>Note Taker</Card.Title>
          <Card.Text>
          The Note Taker app is an intuitive and user-friendly application designed to help users organize their thoughts, ideas, and information in a seamless manner. Built with simplicity and efficiency in mind, this app provides a straightforward experience from the moment you open it.
          </Card.Text>
          <a href="https://lit-eyrie-49322-e0487ec15df8.herokuapp.com/notes" target="_blank">
            <span data-info="Visit the app">
              <Window className='card-icons' color="white" size={50} />
            </span>
          </a>
          <a href="https://github.com/PRich57/note-taker" target="_blank">
            <span data-info="Visit the Repo">
              <Github className='card-icons' color="white" size={50} />
            </span>
          </a>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: '35rem'}}>
        <Card.Img variant="top" src="../src/assets/code-quiz.png" />
        <Card.Body>
          <Card.Title>Code Quiz</Card.Title>
          <Card.Text>
          Code assessments are a common and important part of the interview process and the creation of this quiz allowed us, as boot camp students, to understand what we may face during interviews. More importantly, it gave us a multifaceted problem that we had to break down into smaller parts, solve piece by piece, and then reassemble to create the final product.
          </Card.Text>
          <a href="https://prich57.github.io/code-quiz/" target="_blank">
            <span data-info="Visit the app">
              <Window className='card-icons' color="white" size={50} />
            </span>
          </a>
          <a href="https://github.com/PRich57/code-quiz" target="_blank">
            <span data-info="Visit the Repo">
              <Github className='card-icons' color="white" size={50} />
            </span>
          </a>
        </Card.Body>
      </Card> */}
      {/* <Card style={{ width: '35rem'}}>
        <Card.Img variant="top" src="../src/assets/wdsScreenshot.png" />
        <Card.Body>
          <Card.Title>Work Day Scheduler</Card.Title>
          <Card.Text>
          The purpose of the Work Day Schedular is to help users organize their work days with persistent storage. The schedular has time blocks for each hour from 9am to 5pm. Within each time block, users can type in tasks they have to accomplish, meetings they have to attend, or any other form of reminder to keep themselves organized.
          </Card.Text>
          <a href="https://prich57.github.io/work-day-schedular/" target="_blank">
            <span data-info="Visit the app">
              <Window className='card-icons' color="white" size={50} />
            </span>
          </a>
          <a href="https://github.com/PRich57/work-day-schedular" target="_blank">
            <span data-info="Visit the Repo">
              <Github className='card-icons' color="white" size={50} />
            </span>
          </a>
        </Card.Body>
      </Card> */}