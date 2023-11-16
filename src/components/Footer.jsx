import '../styles/components/Footer.css';
import { Linkedin, Github } from 'react-bootstrap-icons'

function Footer() {
  return (
  <footer className='footer'>
    <div className="footer">
      <a href="https://github.com/PRich57" target="_blank">
        <span data-info="Visit my GitHub" className='tooltip swing'>
        <Github className='media-icons' color="white" size={40} />
        </span>
      </a>
      <a href="https://linkedin.com/in/peterrichards57" target="_blank">
        <span data-info="Visit my LinkedIn" className='tooltip swing'>
          <Linkedin className="media-icons" color="white" size={40} />
        </span>
      </a>
    </div>
  </footer>
  )
}

export default Footer;