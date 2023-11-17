import Accordion from "../components/About/Accordion";
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
          <Accordion />
          {/* <p>
            Hey, I'm Pete! I recently graduated from the intense Full Stack 
            Coding Boot Camp at the University of Denver!
          </p>
          <p>
            Back in May of 2023, I finally moved from sales and
            management to follow my passion for Software Development. I started
            off with Harvard CS50 on edX.org and immediately knew I'd made the
            right decision. Learning new skills and problem solving in whatever
            creative ways I can conjure up are two of my favorite things and I'm
            thrilled to say I've found a way to do both every day!
          </p>
          <p>
            The tech industry, with its constant innovation and complex
            problem-solving, has fascinated me for years. My recent immersive
            learning experience at DU has solidified my passion, honing my skills in
            coding, collaboration, and critical thinking.
          </p>
          <p>
            Looking ahead, I'm confident in my path and ready to make a
            significant impact in the tech world! My journey has equipped me
            with a comprehensive skill set, preparing me for the challenges and
            opportunities that lie ahead.
          </p> */}
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
