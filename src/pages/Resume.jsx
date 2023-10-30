import pdf from "../../public/assets/resume.pdf";
import resume from "../../public/assets/resume.png";
import "../styles/components/Resume.css";
import { ArrowDown } from "react-bootstrap-icons"

export default function Resume() {
  return (
    <>
      <div className="resume">
        <a href={pdf} target='_blank'> 
          <img src={resume} alt="Pete's Resume" />
        </a>
      </div>
      <h6>Click to Download <ArrowDown/></h6>
      <h2>Resume</h2>
    </>
  );
}
