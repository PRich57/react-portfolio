import pdf from "/src/assets/resume.pdf";
import resume from "/src/assets/resume.png";
import "../styles/components/Resume.css";
import { Download } from "react-bootstrap-icons"
import Button from "../components/Button"

export default function Resume() {
  return (
    <>
      <div className="acrossBottom">
        <h4 className="resumeSections">
          Technologies
        </h4>
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
      <div className="resume">
        <div className="left">
          <h4 className="resumeSections">
            Relevant Experience
          </h4>
          <div className="resumeContent">
            <ul className="resumeList">
              <li className="resumeItem">content</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h4 className="resumeSections">
            Skills
          </h4>
          <div className="resumeContent">
          <ul className="resumeList">
              <li className="resumeItem">content</li>
            </ul>
          </div>
        </div>
        <div className="left">
          <h4 className="resumeSections">
            Education
          </h4>
          <div className="resumeContent">
          <ul className="resumeList">
              <li className="resumeItem">content</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <h4 className="resumeSections">
            Achievements
          </h4>
          <div className="resumeContent">
          <ul className="resumeList">
              <li className="resumeItem">content</li>
            </ul>
          </div>
        </div>
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
