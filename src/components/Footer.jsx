import '../styles/components/Footer.css';

function Footer() {
  return (
  <footer className='footer'>
    <div className="footer">
      <a href="mailto:pcrichards57@gmail.com?subject = Feedback&body = Message">
        <span data-info="Email Me">
          <img src="../src/assets/envelope.png" alt="Envelope icon" className='media-icons'/>
        </span>
      </a>
      <a href="https://github.com/PRich57" target="_blank">
        <span data-info="Visit my GitHub">
          <img
            src="../src/assets/github-white.png"
            alt="GitHub icon"
            className="media-icons"
            id="github"
          />
        </span>
      </a>
      <a href="https://linkedin.com/in/peterrichards57" target="_blank">
        <span data-info="Visit my LinkedIn">
          <img
            src="../src/assets/linkedin.png"
            alt="LinkedIn icon"
            className="media-icons"
            id="linkedin"
          />
        </span>
      </a>
    </div>
  </footer>
  )
}

export default Footer;