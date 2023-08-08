import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Everdell from "./games/everdell/everdell";
import NajlepszaGraOPpsach2 from "./games/najlepsza_gra_o_psach_2/najlepsza_gra_o_psach_2";
import NaSkrzydlach from "./games/na_skrzydlach/na_skrzydlach";


function NaviGames() {
  const [menuVisible, setMenuVisible] = useState(true); // dodajemy stan menuVisible

  const handleMenuClick = () => {
    setMenuVisible(false); // zmieniamy stan na false po kliknięciu w element menu
  };
  


  return (
    <div>
       {menuVisible && (
      <div className="Navstyle">
        <Navbar expand="md" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="everdell" onClick={handleMenuClick}>
                  Everdell
                </Nav.Link>
                <Nav.Link as={Link} to="najlepsza_gra_o_psach_2" onClick={handleMenuClick}>
                  Najlepsza gra o psach 2
                </Nav.Link>
                <Nav.Link as={Link} to="na_skrzydlach" onClick={handleMenuClick}>
                  Na skrzydłach
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      )}
      <div>
        <Routes>
          <Route path="/everdell" element={<Everdell />} />
          <Route
            path="/najlepsza_gra_o_psach_2"
            element={<NajlepszaGraOPpsach2 />}
          />
          <Route path="/na_skrzydlach" element={<NaSkrzydlach />} />
        </Routes>
      </div>
    </div>
  );
}

export default NaviGames;