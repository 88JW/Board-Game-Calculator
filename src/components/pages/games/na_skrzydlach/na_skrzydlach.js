import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Kalkulator extends Component {
  state = {
    gracze: [
      {
        ptakiWartosc: null,
        kartyBonusoweWartosc: null,
        celeWartosc: null,
        jajkaWartosc: null,
        pozywienieNaKartachWartosc: null,
        kartaPodKartaWartosc: null,
        znacznikiDuetuWartosc: null,
        suma: 0, // Initialize suma property to 0
      },
    ],
    suma: 0,
  };

  handleChange = (e, index) => {
    const name = e.target.name;
    const type = e.target.type;
    const value =
      type === "checkbox" ? e.target.checked : parseFloat(e.target.value); // Parse value to a float

    this.setState((prevState) => {
      const updatedGracze = [...prevState.gracze];
      updatedGracze[index] = {
        ...updatedGracze[index],
        [name]: value,
      };
      return { gracze: updatedGracze };
    });
  };

  handleSubmmit = (e, index) => {
    e.preventDefault();
    const { gracze } = this.state;

    const wynik =
      parseFloat(gracze[index].ptakiWartosc || 0) +
      parseFloat(gracze[index].kartyBonusoweWartosc || 0) +
      parseFloat(gracze[index].celeWartosc || 0) +
      parseFloat(gracze[index].jajkaWartosc || 0) +
      parseFloat(gracze[index].pozywienieNaKartachWartosc || 0) +
      parseFloat(gracze[index].kartaPodKartaWartosc || 0) +
      parseFloat(gracze[index].znacznikiDuetuWartosc || 0);

    this.setState((prevState) => {
      const updatedGracze = [...prevState.gracze];
      updatedGracze[index].suma = wynik;
      return { gracze: updatedGracze };
    });
  };

  handleClick = (e) => {
    const button = e.target;
    const { gracze } = this.state;
    // const div = document.querySelector(".Kalkulator__conteiner");
    if (button.className === "removePlayer") {
      // Usuwanie gracza
      const index = gracze.length - 1; // Usuwamy ostatniego gracza
      if (index >= 0) {
        gracze.splice(index, 1);
        this.setState({ gracze });
      }
    } else if (button.className === "addPlayer") {
      // Dodawanie gracza
      this.setState((prevState) => ({
        gracze: [...prevState.gracze, {}],
      }));
    }
  };

  render() {
    const { gracze } = this.state;

    return (
      <div className="Elements__conteiner">
        <div className="opis">
          <h1>Kalkulator gry: "Na Skrzydłach"</h1>
          <div className="opis">
            <p>
              Wprowadź do rubryk poszczególne wartości każdego gracza i kliknij
              oblicz wynik
            </p>
          </div>
        </div>
        <button className="addPlayer" onClick={this.handleClick}>
          {" "}
          Dodaj gracza{" "}
        </button>
        <button className="removePlayer" onClick={this.handleClick}>
          {" "}
          Ukryj{" "}
        </button>
        {gracze.map((gracz, index) => (
          <div className="Kalkulator__conteiner" key={index}>
            <Container fluid>
              <form onSubmit={(e) => this.handleSubmmit(e)}>
                <Row className="row__one">
                  <Col>
                    <label htmlFor={`ptaki-${index}`}>
                      Ptaki:
                      <br />
                      <input
                        className="textbox"
                        type="number"
                        id={`ptaki-${index}`}
                        name={`ptakiWartosc-${index}`}
                        value={
                          gracz.ptakiWartosc === null ? "" : gracz.ptakiWartosc
                        }
                        onChange={(e) => this.handleChange(e, index)}
                      />
                    </label>
                  </Col>
                  <Col>
                    <label htmlFor={`kartyBonusowe-${index}`}>
                      Karty Bonusowe:
                      <br />
                      <input
                        className="textbox"
                        type="number"
                        id={`kartyBonusowe-${index}`}
                        name={`kartyBonusoweWartosc-${index}`}
                        value={
                          gracz.kartyBonusoweWartosc === null
                            ? ""
                            : gracz.kartyBonusoweWartosc
                        }
                        onChange={(e) => this.handleChange(e, index)}
                      />
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor={`cele-${index}`}>
                      Cele
                      <br />{" "}
                      <input
                        className="textbox"
                        type="number"
                        id={`cele-${index}`}
                        name={`celeWartosc-${index}`}
                        value={
                          gracz.celeWartosc === null ? "" : gracz.celeWartosc
                        }
                        onChange={(e) => this.handleChange(e, index)}
                      />
                    </label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor={`jajka-${index}`}>
                      Jajka
                      <br />{" "}
                      <input
                        className="textbox"
                        type="number"
                        id={`jajka-${index}`}
                        name={`jajkaWartosc-${index}`}
                        value={
                          gracz.jajkaWartosc === null ? "" : gracz.jajkaWartosc
                        }
                        onChange={(e) => this.handleChange(e, index)}
                      />
                    </label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor={`pozywienieNaKartach-${index}`}>
                      Pożywienie Na Kartach
                      <br />{" "}
                      <input
                        className="textbox"
                        type="number"
                        id={`pozywienieNaKartach-${index}`}
                        name={`pozywienieNaKartachWartosc-${index}`}
                        value={
                          gracz.pozywienieNaKartachWartosc === null
                            ? ""
                            : gracz.pozywienieNaKartachWartosc
                        }
                        onChange={(e) => this.handleChange(e, index)}
                      />
                    </label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor={`kartaPodKarta-${index}`}>
                      Karta Pod Karta
                      <br />{" "}
                      <input
                        className="textbox"
                        type="number"
                        id={`kartaPodKarta-${index}`}
                        name={`kartaPodKartaWartosc-${index}`}
                        value={
                          gracz.kartaPodKartaWartosc === null
                            ? ""
                            : gracz.kartaPodKartaWartosc
                        }
                        onChange={(e) => this.handleChange(e, index)}
                      />
                    </label>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor={`znacznikiDuetu-${index}`}>
                      Znaczniki Duetu
                      <br />{" "}
                      <input
                        className="textbox"
                        type="number"
                        id={`znacznikiDuetu-${index}`}
                        name={`znacznikiDuetuWartosc-${index}`}
                        value={
                          gracz.znacznikiDuetuWartosc === null
                            ? ""
                            : gracz.znacznikiDuetuWartosc
                        }
                        onChange={(e) => this.handleChange(e, index)}
                      />
                    </label>
                  </Col>
                  <Col></Col>
                </Row>{" "}
                <Row>
                  <Col>
                    <label htmlFor={`suma-${index}`}>
                      Suma punktów:
                      <br />
                      <div id={`suma-${index}`}>{gracz.suma || 0}</div>
                    </label>
                  </Col>
                  <Col>
                    <button
                      className="myButton"
                      onClick={(e) => this.handleSubmmit(e, index)}
                    >
                      Oblicz wynik gracza
                    </button>
                  </Col>
                </Row>
                <br />
                <button
                  className="myButton"
                  onClick={(e) => this.handleSubmmit(e, index)}
                >
                  Oblicz kto wygrał
                </button>
              </form>
            </Container>
            <Container>
              <div id="sumResult"></div>
            </Container>
          </div>
        ))}
      </div>
    );
  }
}
