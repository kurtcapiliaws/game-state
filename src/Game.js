import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
      backgroundColor: "#ffffff",
      buttonColor: "#007bff", 
    };
  }

  handleClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 10) + 1;

    this.setState((prevState) => ({
      randomNumber: newRandomNumber,
      backgroundColor: this.getBackgroundColor(newRandomNumber),
      buttonColor: this.getButtonColor(newRandomNumber),
    }));
  };

  getBackgroundColor = (number) => {
    const colors = [
      '#FF5733',
      '#33FF57',
      '#5733FF',
      '#FF33A1',
      '#33A1FF',
      '#A1FF33',
      '#FF3333',
      '#33FFC1',
      '#FFD933',
      '#FFA333',
    ];

    return colors[number - 1]; 
  };

  getButtonColor = (number) => {
    const buttonColors = [
      '#FF5733',
      '#33FF57',
      '#5733FF',
      '#FF33A1',
      '#33A1FF',
      '#A1FF33',
      '#FF3333',
      '#33FFC1',
      '#FFD933',
      '#FFA333',
    ];

    return buttonColors[number - 1]; 
  };

  render() {
    const { randomNumber, backgroundColor, buttonColor } = this.state;

    return (
      <div className="game-container" style={{ backgroundColor }}>
        <h1 className="random-number">Random Number: {randomNumber}</h1>
        <button
          className="generate-button"
          onClick={this.handleClick}
          style={{ backgroundColor: buttonColor }}
        >
          GENERATE RANDOM NUMBER
        </button>
      </div>
    );
  }
}

export default Game;
