import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Kalkulator extends Component {
  state = {
    ptakiWartosc: 0,
    kartyBonusoweWartosc: 0,
    celeWartosc: 0,
    jajkaWartosc: 0,
    pozywienieNaKartachWartosc: 0,
    kartaPodKartaWartosc: 0,
    znacznikiDuetuWartosc: 0,
  };

  handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "number") {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmmit = (e) => {
    e.preventDefault();
    const wynik =
      parseFloat(this.state.ptakiWartosc) +
      parseFloat(this.state.kartyBonusoweWartosc) +
      parseFloat(this.state.celeWartosc) +
      parseFloat(this.state.jajkaWartosc) +
      parseFloat(this.state.pozywienieNaKartachWartosc) +
      parseFloat(this.state.kartaPodKartaWartosc) +
      parseFloat(this.state.znacznikiDuetuWartosc);

    this.setState({
      suma: wynik,
    });
    document.getElementById("sumResult").textContent = `Suma: ${wynik}`;
    console.log(wynik);
  };

  render() {
    return (
      <div className="Elements__conteiner">
        <div className="Kalkulator__conteiner">
          <Container>
            <h1>Kalkulator gry: "Na Skrzydłach"</h1>
            <div className="opis">
              <p>
                Wprowadź do rubryk poszczególne wartości każdego gracza i
                kliknij oblicz wynik
              </p>
            </div>
          </Container>
          <Container fluid>
            <form onSubmit={this.handleSubmmit}>
              <Row className="row__one">
                <Col>
                  <label htmlFor="ptaki">
                    Ptaki:
                    <br />
                    <input
                      className="textbox"
                      type="number"
                      id="ptaki"
                      name="ptakiWartosc"
                      value={this.state.ptakiWartosc}
                      onChange={this.handleChange}
                    />
                  </label>
                </Col>
                <Col>
                  <label htmlFor="kartyBonusowe">
                    Karty Bonusowe:
                    <br />
                    <input
                      className="textbox"
                      type="number"
                      id="kartyBonusowe"
                      name="kartyBonusoweWartosc"
                      value={this.state.kartyBonusoweWartosc}
                      onChange={this.handleChange}
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="cele">
                    Cele
                    <br />{" "}
                    <input
                      className="textbox"
                      type="number"
                      id="cele"
                      name="celeWartosc"
                      value={this.state.celeWartosc}
                      onChange={this.handleChange}
                    />
                  </label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="jajka">
                    Jajka
                    <br />{" "}
                    <input
                      className="textbox"
                      type="number"
                      id="jajka"
                      name="jajkaWartosc"
                      value={this.state.jajkaWartosc}
                      onChange={this.handleChange}
                    />
                  </label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="pozywienieNaKartach">
                    Pożywienie Na Kartach
                    <br />{" "}
                    <input
                      className="textbox"
                      type="number"
                      id="pozywienieNaKartach"
                      name="pozywienieNaKartachWartosc"
                      value={this.state.pozywienieNaKartachWartosc}
                      onChange={this.handleChange}
                    />
                  </label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="kartaPodKarta">
                    Karta Pod Karta
                    <br />{" "}
                    <input
                      className="textbox"
                      type="number"
                      id="kartaPodKarta"
                      name="kartaPodKartaWartosc"
                      value={this.state.kartaPodKartaWartosc}
                      onChange={this.handleChange}
                    />
                  </label>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="znacznikiDuetu">
                    Znaczniki Duetu
                    <br />{" "}
                    <input
                      className="textbox"
                      type="number"
                      id="znacznikiDuetu"
                      name="znacznikiDuetuWartosc"
                      value={this.state.znacznikiDuetuWartosc}
                      onChange={this.handleChange}
                    />
                  </label>
                </Col>
                <Col></Col>
              </Row>{" "}
              <br />
              <button className="myButton" onClick={this.handleClick}>
                Oblicz kto wygrał
              </button>
            </form>
          </Container>
          <Container>
            <div id="sumResult"></div>
          </Container>
        </div>
      </div>
    );
  }
}
