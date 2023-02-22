import { useState, useEffect } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/img/logoVipaint.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
// https://www.youtube.com/watch?v=hYv6BM2fWd8&t=162s
export const NavBar = () =>{
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return() => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

    return(
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#cv" className={activeLink==='cv' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cv')}>CV</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Linkedin"/></a>
              <a href="https://github.com/VitOR4321"><img src={navIcon5} alt="GitHub"/></a>
              {/* <a href="#"><img src={navIcon2} alt="Facebook"/></a> */}
              {/* <a href="#"><img src={navIcon3} alt="Instagram"/></a> */}
              {/* <a href="#"><img src={navIcon4} alt="Pinterest"/></a> */}
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
