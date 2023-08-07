import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function NumberForm({ formCount, onDelete, playerName, onNameChange }) {
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

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <Container>
      <Form.Group controlId="formPlayerName">
        <Form.Label>Wprowadź nazwę gracza:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Wprowadź nazwę"
          value={playerName}
          onChange={handleNameChange}
        />
      </Form.Group>

      <h1>{playerName ? playerName : `Player ${formCount}`} </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNumber1">
          <Form.Label>Psy:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź liczbę"
            value={number1}
            onChange={handleChange1}
          />
        </Form.Group>
        <Form.Group controlId="formNumber2">
          <Form.Label>Zabawki:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź liczbę"
            value={number2}
            onChange={handleChange2}
          />
        </Form.Group>
        <Form.Group controlId="formNumber2">
          <Form.Label>Kości:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź liczbę"
            value={number3}
            onChange={handleChange3}
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit">
          Wyślij
        </Button> */}
      </Form>
      <p>Suma wprowadzonych liczb: {sum}</p>
      <Button variant="primary" onClick={handleButtonClick}>
        Oblicz sumę
      </Button>
      <Button variant="danger" onClick={handleResetClick}>
        Resetuj
      </Button>
      {formCount > 1 && (
        <Button variant="danger" onClick={handleDeleteClick}>
          Usuń formularz
        </Button>
      )}
      {/* <Form.Group controlId="formPlayerName">
        <Form.Label>Wprowadź nazwę gracza:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Wprowadź nazwę"
          value={playerName}
          onChange={handleNameChange}
        />
      </Form.Group> */}
    </Container>
  );
}

function App() {
  const [numPlayers, setNumPlayers] = useState(0);
  const [showForms, setShowForms] = useState(false);
  const [playerNames, setPlayerNames] = useState([]);

  const handleNumPlayersChange = (event) => {
    setNumPlayers(parseInt(event.target.value));
  };

  const handleStartClick = () => {
    setShowForms(true);
    setPlayerNames([...Array(numPlayers)].map(() => ""));
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
              onChange={handleNumPlayersChange}
            >
              <option value="0">Wybierz...</option>
              <option value="1">1 gracz</option>
              <option value="2">2 graczy</option>
              <option value="3">3 graczy</option>
              <option value="4">4 graczy</option>
            </Form.Control>
          </Form.Group>
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
            <NumberForm
              key={index}
              formCount={index + 1}
              onDelete={() => setNumPlayers(numPlayers - 1)}
              playerName={playerNames[index]}
              onNameChange={(name) => handleNameChange(index, name)}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default App;