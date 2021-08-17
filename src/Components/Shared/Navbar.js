import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div className="mb-4">
        <div className="row">
          <div className="col-md-12 ">
            <Navbar
              id="navbar"
              bg="secondary"
              variant="dark"
              expand="lg"
              sticky="top">
<Navbar.Brand href="/"><img src="/images/logo_philiance.png" alt="image"widht ="55" height = "55"/></Navbar.Brand>
            <Nav className="mx-auto ">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                 <NavDropdown title="Accueil" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/Inscription">S'inscrire</NavDropdown.Item>
                  <NavDropdown.Item href="/Connexion">Se connecter</NavDropdown.Item>
                 </NavDropdown>
                 <NavDropdown title="Profil" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/MonProfilCv">Profil candidat</NavDropdown.Item>
                  <NavDropdown.Item href="/ProfilEntreprise">Profil entreprise</NavDropdown.Item>
                  <NavDropdown.Item href="/ListUser">Profil administrateur</NavDropdown.Item>
                 </NavDropdown>
                    <NavDropdown title="Curriculum vitae" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/RechercherCv">Rechercher un CV</NavDropdown.Item>
                  <NavDropdown.Item href="/PresentationCV">CV Philiance</NavDropdown.Item>
                  <NavDropdown.Item href="/ListCv">Liste CV</NavDropdown.Item>

                 </NavDropdown>
                   <Nav.Link as={Link} to="/Test">
                    Test
                  </Nav.Link>
                  <Nav.Link as={Link} to="/ContactPage">
                  Contact
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/Email">
                    Les emails
                  </Nav.Link> */}
              </Navbar.Collapse>
            </Nav>
            </Navbar>
          </div>
        </div>
      </div>
    );
  };
};
export default BootstrapNavbar;
