import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Ptaszki from "./games/Ptaszki";
import Pieski from "./games/Pieski";
import Kalkulator from "./games/Kalkulator";

export default function NaviGames() {
  return (
    <div>
      <div className="Navstyle">
        <Navbar expand="md" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="ptaszki">
                  Ptaszki
                </Nav.Link>
                <Nav.Link as={Link} to="pieski">
                  Pieski
                </Nav.Link>
                <Nav.Link as={Link} to="kalkulator">
                  Kalkulator
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route path="/ptaszki" element={<Ptaszki />} />
          <Route path="/pieski" element={<Pieski />} />
          <Route path="/kalkulator" element={<Kalkulator />} />
        </Routes>
      </div>
    </div>
  );
}
