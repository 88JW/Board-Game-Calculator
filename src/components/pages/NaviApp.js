import React , { useState } from "react";
import Home from "./Home";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";

import NaviGame from "./NaviGame";

function NaviApp() {
 const [menuVisible, setMenuVisible] = useState(true); // dodajemy stan menuVisible

  const handleMenuClick = () => {
    setMenuVisible(false); // zmieniamy stan na false po kliknięciu w element menu
  };

  return (
    <div>
      {menuVisible && ( // wyświetlamy menu tylko jeśli menuVisible jest true
        <div className="Navstyle">
          <Navbar expand="md" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="navigame" onClick={handleMenuClick}>
                    Gry
                  </Nav.Link>
                  <Nav.Link as={Link} to="home" onClick={handleMenuClick}>
                    Home
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )}

     <div>
        <Routes>
          <Route path="/navigame/*" element={<NaviGame />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    <Button variant="primary" href="/">Powrót do strony głównej</Button>
    </div>
  );
}

export default NaviApp;
