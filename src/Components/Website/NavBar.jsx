import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import logo from "../../Assets/Images/logo.svg";
import Container from "react-bootstrap/Container";
import profile from "../../Assets/Images/profile.jpg";
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scorll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              href="#home"
              onClick={() => onUpdateActiveLink("home")}
            >
              الرئيسية
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              href="#skills"
              onClick={() => onUpdateActiveLink("skills")}
            >
              الحصص
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "homework" ? "active navbar-link" : "navbar-link"
              }
              href="#homework"
              onClick={() => onUpdateActiveLink("homework")}
            >
              الواجبات
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              href="#project"
              onClick={() => onUpdateActiveLink("projects")}
            >
              الامتحانات
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <span className="profile">
            <DropdownButton id="dropdown-basic-button" title="إسلام وائل">
              <DropdownItem>حسـابي</DropdownItem>
              <DropdownItem>الإعـدادات</DropdownItem>
              <DropdownItem>تسجيل الخروج</DropdownItem>
            </DropdownButton>
            <img className="profile-img" src={profile} alt="profile" />
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
}
