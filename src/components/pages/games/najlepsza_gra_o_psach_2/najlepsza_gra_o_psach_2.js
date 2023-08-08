import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./najlepsza_gra_o_psach_2.css"
import ".././css/contenerGraczy.css";




function NumberForm({ formCount, playerName }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [sum, setSum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
    setSum(sum);
  };

  const handleChange1 = (event) => {
    setNumber1(event.target.value);
  };

  const handleChange2 = (event) => {
    setNumber2(event.target.value);
  };

  const handleChange3 = (event) => {
    setNumber3(event.target.value);
  };

  const handleButtonClick = () => {
    const sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
    setSum(sum);
  };

  const handleResetClick = () => {
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setSum("");
  };

  return (
    <Container className="contenerGraczy">
      <h1>{playerName ? playerName : `Player ${formCount}`} </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNumber1">
          <Form.Label>
            {" "}
            Suma Nakarmionych Psów:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number1}
            onChange={handleChange1}
          />
        </Form.Group>
        <Form.Group controlId="formNumber2">
          <Form.Label>
            Zabawki:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number2}
            onChange={handleChange2}
          />
        </Form.Group>
        <Form.Group controlId="formNumber2">
          <Form.Label>
            Kości:<br></br>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź punkty"
            value={number3}
            onChange={handleChange3}
          />
        </Form.Group>
      </Form>
      <p>Suma wprowadzonych liczb: {sum}</p>
      <Button className="btnSuma" variant="primary" onClick={handleButtonClick}>
        Oblicz sumę
      </Button>
      <Button
        className="btnResetuj"
        variant="danger"
        onClick={handleResetClick}
      >
        Resetuj
      </Button>
    </Container>
  );
}

function App() {
  const [numPlayers, setNumPlayers] = useState(0);
  const [showForms, setShowForms] = useState(false);
  const [playerNames, setPlayerNames] = useState([]);

  const handleNumPlayersChange = (event) => {
    const numPlayers = parseInt(event.target.value);
    setNumPlayers(numPlayers);
    setPlayerNames([...Array(numPlayers)].map(() => ""));
  };

  const handleStartClick = () => {
    setShowForms(true);
  };

  const handleNameChange = (index, name) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  return (
    <Container style={{ maxWidth: "500px", margin: "auto" }}>
      {!showForms && (
        <Form>
          <Form.Group controlId="formNumPlayers">
            <Form.Label>Wybierz liczbę graczy:</Form.Label>
            <Form.Control
              as="select"
              value={numPlayers}
              onChange={handleNumPlayersChange}            >
              <option value="0">Wybierz...</option>
              <option value="1">1 gracz</option>
              <option value="2">2 graczy</option>
              <option value="3">3 graczy</option>
              <option value="4">4 graczy</option>
            </Form.Control>
          </Form.Group>
          {[...Array(numPlayers)].map((_, index) => (
            <Form.Group controlId="formPlayerName" key={index}>
              <Form.Label>Wprowadź nazwę gracza {index + 1}:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wprowadź nazwę"
                value={playerNames[index]}
                onChange={(event) =>
                  handleNameChange(index, event.target.value)
                }
              />
            </Form.Group>
          ))}
          <Button
            variant="primary"
            type="button"
            onClick={handleStartClick}
            disabled={numPlayers === 0}
            block
          >
            Rozpocznij
          </Button>
        </Form>
      )}
      {showForms && (
        <>
          {[...Array(numPlayers)].map((_, index) => (
            <div key={index}>
              <NumberForm
                formCount={index + 1}
                onDelete={() => setNumPlayers(numPlayers - 1)}
                playerName={playerNames[index]}
              />
            </div>
          ))}
        </>
      )}      
    </Container>
  );
}

export default App;
