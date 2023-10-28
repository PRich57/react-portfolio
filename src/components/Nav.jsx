import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Button from './Button';
import { HiUser, HiOutlineCodeBracketSquare, HiEnvelope, HiPaperClip } from 'react-icons/hi2';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "about-me");
  const location = useLocation();

  useEffect(() => {
     // Remove the leading slash
    const currentPath = location.pathname.substring(1)
    // Default to about me for initial load
    setActiveTab(currentPath || "about-me");
  }, [location]);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Navbar bg="light">
      <Container fluid>
        <Nav className="me-auto">
          {/* <Link to="home" className="nav-link" onClick={() => setExpanded(false)}>
            <Button content="Home &nbsp;" icon={<HiHome />} />
          </Link> */}
          <NavLink to="about-me" className="nav-link" onClick={() => handleTabClick("about-me")}>
            <Button content="About Me &nbsp;" icon={<HiUser />} className={activeTab === "about-me" ? "active-btn" : ""} />
          </NavLink>
          <NavLink to="portfolio" className="nav-link" onClick={() => handleTabClick("portfolio")}>
            <Button content='Portfolio &nbsp;' icon={<HiOutlineCodeBracketSquare />} className={activeTab === "portfolio" ? "active-btn" : ""} />
          </NavLink>
          <NavLink to="contact" className="nav-link" onClick={() => handleTabClick("contact")}>
            <Button content='Contact  &nbsp;' icon={<HiEnvelope />} className={activeTab === "contact" ? "active-btn" : ""} />
          </NavLink>
          <NavLink to="resume" className="nav-link" onClick={() => handleTabClick("resume")}>
            <Button content='Resume &nbsp;' icon={<HiPaperClip />} className={activeTab === "Resume" ? "active-btn" : ""} />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;


