// Data for Project cards on Projects page
import devRow from "/src/assets/dev-row-records.png";
import gameSeekers from "/src/assets/gameSeekersScreenshot.png";
import YouRL from "/src/assets/short-url.png";
// import weatherDash from "/src/assets/weather-dashboard-screenshot.png";
import blurb from "/src/assets/blurb.png";

// Create projectData array of objects to insert values for each project card
export const projectData = [
  {
    title: `Blurb: Social Media App`,
    description: `Switch to Blurb, the innovative social media platform where your voice matters. Say goodbye to the clutter and hello to a fresher, more engaging online experience!`,
    liveLink: `https://blurb4-web-6d7dbae39646.herokuapp.com/`,
    repoLink: `https://github.com/ljkahn/Blurb`,
    imgSrc: blurb,
  },
  {
    title: `YouRL`,
    description: `Simplify your links with YouRL, the ultimate solution for transforming lengthy web addresses into sleek, shareable links. Ideal for social media, digital marketing, or just easier sharing - make every link short and sharp with YouRL.`,
    liveLink: `https://www.you-rl.xyz/`,
    repoLink: `https://github.com/PRich57/short-url`,
    imgSrc: YouRL,
  },
  {
    title: `Dev Row Records`,
    description: `Step into the rhythm of Dev Row Records, where beats meet creativity in a revolutionary way. Experience the new era of music with a nod to the legends, only at Dev Row Records – where every track tells a story.`,
    liveLink: `https://dev-row-records-63d750921ea0.herokuapp.com/`,
    repoLink: `https://github.com/PRich57/dev-row-records`,
    imgSrc: devRow,
  },
  {
    title: "Game Seekers",
    description: `Discover your next gaming obsession with Game Seekers, the ultimate video game recommendation engine. Tailored to your tastes, find games you'll love based on your all-time favorites!`,
    liveLink: `https://ljkahn.github.io/videoGameProj/`,
    repoLink: `https://github.com/ljkahn/videoGameProj`,
    imgSrc: gameSeekers,
  },
  // {
  //   title: `Weather Dash`,
  //   description: `Why step outside to check the weather when you can just tap your screen? Get your daily and 5-day forecasts with Weather Dash - where the forecast is always at your fingertips, rain or shine! Now you can finally stop blaming the weatherman for ruining your plans. 🌦️☔`,
  //   liveLink: `https://prich57.github.io/weather-dash/`,
  //   repoLink: `https://github.com/PRich57/weather-dash`,
  //   imgSrc: weatherDash,
  // },
];