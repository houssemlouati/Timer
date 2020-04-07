import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
  state = {
    time: 0,
    play: true,
  };

  startTimer = () => {
    this.myInterval = setInterval(() => {
      this.setState({
        play: false,
        time: this.state.time + 1,
      });
    }, 1000);
  };

  pauseTimer = () => {
    this.myInterval = clearInterval(this.myInterval);
    this.setState({ play: true });
  };

  resetTimer = () => {
    this.setState({ time: 0, play: true });
    clearInterval(this.myInterval);
  };

  render() {
    let hours = String(parseInt(this.state.time / 3600)).padStart(2, "0");
    let minutes = String(parseInt((this.state.time % 3600) / 60)).padStart(
      2,
      "0"
    );
    let seconds = String(parseInt(this.state.time % 60)).padStart(2, "0");

    return (
      <div className="container">
        {hours}:{minutes}:{seconds}
        <div className="allbuttons">
          {this.state.play ? (
            <button
              className=" btnstart"
              onClick={() => this.startTimer()}
            >Start</button>
          ) : (
            <button
              className=" btnpause"

              onClick={() => this.pauseTimer()}
            >Pause</button>
          )}
          <button
            className=" btnreset"
            onClick={() => this.resetTimer()}
          >Reset</button>
        </div>
      </div>
    );
  }
}
export default Timer;
