import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { HiUser, HiOutlineCodeBracketSquare, HiEnvelope, HiPaperClip } from 'react-icons/hi2';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link to="home" className="nav-link" onClick={() => setExpanded(false)}>
              <Button content="Home &nbsp;" icon={<HiHome />} />
            </Link> */}
            <NavLink to="about-me" className="nav-link" onClick={() => setExpanded(false)}>
              <Button content="About Me &nbsp;" icon={<HiUser />} />
            </NavLink>
            <NavLink to="portfolio" className="nav-link" onClick={() => setExpanded(false)}>
              <Button content='Projects &nbsp;' icon={<HiOutlineCodeBracketSquare />} />
            </NavLink>
            <NavLink to="contact" className="nav-link" onClick={() => setExpanded(false)}>
              <Button content='Contact  &nbsp;' icon={<HiEnvelope />} />
            </NavLink>
            <NavLink to="resume" className="nav-link" onClick={() => setExpanded(false)}>
              <Button content='Resume &nbsp;' icon={<HiPaperClip />} />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;


