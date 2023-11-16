import { TypeAnimation } from "react-type-animation";
import "../styles/components/AboutMe.css";
import profilePic from "/src/assets/linkedin_profile_pic.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="about">
        <div className="image">
          <img src={profilePic} alt="Picture of Pete" />
        </div>
        <div className="aboutInfo">
          <p>
            Hi, I'm Pete Richards, recent graduate of the University of Denver’s
            Coding Boot Camp!
          </p>
          <p>
            Initiating a career shift in May 2023, I moved from sales and
            management to follow my passion for Software Development. My
            progression has been rapid and rewarding, with accomplishments
            including completing DU's Full Stack Web Development Boot Camp,
            Harvard’s CS50 course, and actively collaborating with my former
            boot camp peers on ongoing full stack projects.
          </p>
          <p>
            The tech industry, with its constant innovation and complex
            problem-solving, has fascinated me for years. My recent immersive
            learning experience has solidified my passion, honing my skills in
            coding, collaboration, and critical thinking.
          </p>
          <p>
            Looking ahead, I'm confident in my path and ready to make a
            significant impact in the tech world. My journey has equipped me
            with a comprehensive skill set, preparing me for the challenges and
            opportunities that lie ahead.
          </p>
        </div>
      </div>
      <h2>
        Check Out
        <TypeAnimation
          splitter={(str) => str.split(/(?=)/)}
          sequence={[
            `\n My Projects`,
            2500,
            `\n My Resume`,
            2500,
            `\n My GitHub`,
            2500,
            `\n My LinkedIn`,
            2500,
            `\n My Story`,
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 80 }}
          cursor={false}
          omitDeletionAnimation={false}
        />
      </h2>
    </>
  );
}
