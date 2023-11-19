import pdf from "/src/assets/resume.pdf";
import resume from "/src/assets/resume.png";
import "../styles/components/Resume.css";
import { Download } from "react-bootstrap-icons"
import Button from "../components/Button"

export default function Resume() {
  return (
    <>
      <div className="resume">
          <img src={resume} alt="Pete's Resume" />
      </div>
      <div className="button">
        <a href={pdf} target='_blank'> 
          <Button className="resumeBtn" content="Download PDF Version &nbsp;" icon={<Download />} size="lg" />
        </a>
      </div>
      <h2>Resume</h2>
    </>
  );
}
