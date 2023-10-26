// import '../styles/Navigation.css'
import Button from "./Button";
import { HiOutlineCodeBracketSquare, HiEnvelope, HiUser, HiPaperClip } from "react-icons/hi2";

export default function NavMenu() {

  return (
    <nav className="menu">
      <ul>
        <li><Button content="About Me &nbsp;" icon={<HiUser />} /></li>
        <li><Button content='Portfolio &nbsp;' icon={<HiOutlineCodeBracketSquare />} /></li>
        <li><Button content='Contact  &nbsp;' icon={<HiEnvelope />} /></li>
        <li><Button content='Resume &nbsp;' icon={<HiPaperClip />} /></li>
      </ul>
    </nav>
  );
}



