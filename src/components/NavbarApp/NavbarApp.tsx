import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoMarvel from "../../assets/images/logo-marvel.svg";
import * as SC from "./NavbarApp.styles";

const NavbarApp = () => {
  return (
    <SC.Wrapper collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={LogoMarvel}
              width={150}
              alt="Logo Marvel"
              loading="lazy"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <SC.ContainerNav>
            <SC.LinkNav to="/">Home</SC.LinkNav>
            <SC.LinkNav to="/characters">Characters</SC.LinkNav>
            <SC.LinkNav to="/comics">Comics</SC.LinkNav>
          </SC.ContainerNav>
        </Navbar.Collapse>
      </Container>
    </SC.Wrapper>
  );
};

export default NavbarApp;
