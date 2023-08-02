import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Najlepsza_gra_o_psach_2 extends Component {


  render() {
    return (
      <div className="container">
        <button className="addPlayer" onClick={this.handleClick}>
          {" "}
          Dodaj gracza
        </button>
        <button className="removePlayer" onClick={this.handleClick}>
          {" "}
          Usuń gracza
        </button>

        <div className="blok">
          
        </div>
      </div>
    );
  }
}
