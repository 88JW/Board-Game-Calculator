import { React } from "react";
import Home from "./Home";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";

import NaviGame from "./NaviGame";

function NaviApp() {
  return (
    <div>
      <div className="Navstyle">
        <Navbar expand="md" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="navigame">
                  Gry
                </Nav.Link>
                <Nav.Link as={Link} to="home">
                  Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route path="/navigame/*" element={<NaviGame />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default NaviApp;
