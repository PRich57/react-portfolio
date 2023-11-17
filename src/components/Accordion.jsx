import Accordion from 'react-bootstrap/Accordion';
// import 'bootstrap/dist/css/bootstrap.min.css';

function AboutAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Hello, world!</Accordion.Header>
        <Accordion.Body>
        Hi, I'm Pete Richards, recent graduate of the University of Denver’s
            Coding Boot Camp! "I recently completed this intense boo"
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Making the Transition</Accordion.Header>
        <Accordion.Body>
        Initiating a career shift in May 2023, I moved from sales and
            management to follow my passion for Software Development. My
            progression has been rapid and rewarding, with accomplishments
            including completing DU's Full Stack Web Development Boot Camp,
            Harvard’s CS50 course, and actively collaborating with my former
            boot camp peers on ongoing full stack projects.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Why Tech?</Accordion.Header>
        <Accordion.Body>
        The tech industry, with its constant innovation and complex
            problem-solving, has fascinated me for years. My recent immersive
            learning experience has solidified my passion, honing my skills in
            coding, collaboration, and critical thinking.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What the Future Holds</Accordion.Header>
        <Accordion.Body>
        Looking ahead, I'm confident in my path and ready to make a
            significant impact in the tech world. My journey has equipped me
            with a comprehensive skill set, preparing me for the challenges and
            opportunities that lie ahead.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AboutAccordion;