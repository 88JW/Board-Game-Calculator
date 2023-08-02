import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Everdell from "./games/everdell/everdell";
import NajlepszaGraOPpsach2 from "./games/najlepsza_gra_o_psach_2/najlepsza_gra_o_psach_2";
import NaSkrzydlach from "./games/na_skrzydlach/na_skrzydlach";

export default function NaviGames() {
  return (
    <div>
      <div className="Navstyle">
        <Navbar expand="md" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="everdell">
                  Everdell
                </Nav.Link>
                <Nav.Link as={Link} to="najlepsza_gra_o_psach_2">
                  Najlepsza gra o psach 2
                </Nav.Link>
                <Nav.Link as={Link} to="na_skrzydlach">
                  Na skrzydłach
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
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
