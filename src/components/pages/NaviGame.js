import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../pages/games/css/kafelek.css";

// importujemy obrazki
import everdell from "./games/everdell/everdell.png";
import naSkrzydlach from "./games/na_skrzydlach/wingspan.png";
import Najlepsza from "./games/najlepsza_gra_o_psach_2/najlesza.png";

// importujemy komponenty 
import NajlepszaGraOPpsach2 from "./games/najlepsza_gra_o_psach_2/najlepsza_gra_o_psach_2";
import NaSkrzydlach from "./games/na_skrzydlach/na_skrzydlach";
import Everdell from "./games/everdell/everdell";
function NaviGames() {
  const [menuVisible, setMenuVisible] = useState(true); // dodajemy stan menuVisible

  const handleMenuClick = () => {
    setMenuVisible(false); // zmieniamy stan na false po kliknięciu w element menu
  };

  return (
    <div>
      {/* // dodajemy elementy menu */}
      {menuVisible && (
        <Container>
          <Row>
            <Col xs={6}>
              <div className="tile">
                <Link to="everdell" onClick={handleMenuClick}>
                  <img src={everdell} className="kafelek" xs={6}></img>
                </Link>
              </div>
            </Col>
            <Col xs={6}>
              <div className="tile">
                <Link to="najlepsza_gra_o_psach_2" onClick={handleMenuClick}>
                  <img src={Najlepsza} className="kafelek"></img>
                </Link>
              </div>
            </Col>
            <Col xs={6}>
              <div className="tile">
                <Link to="na_skrzydlach" onClick={handleMenuClick}>
                  <img src={naSkrzydlach} className="kafelek"></img>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <div>
        {/* // dodajemy ścieżki do komponentów */}
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