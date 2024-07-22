import Accordion from "../components/About/Accordion";
import { TypeAnimation } from "react-type-animation";
import "../styles/components/AboutMe.css";
import profilePic from "/src/assets/linkedin_profile_pic.jpg";

// Function component that displays About Me section with Accordion
export default function AboutMe() {
  return (
    <>
      <div className="about">
        <div className="image">
          <img src={profilePic} alt="Picture of Pete" />
        </div>
        <div className="aboutInfo">
          <Accordion />
        </div>
      </div>
      {/* TypeAnimation component for animated effect */}
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
