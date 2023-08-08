import React, { Component } from "react";
import Timer from "./Timer";
import { v1 as uuidv1 } from "uuid";  // Use this import

// Remove the following line since you're not using it
// import uuid from "uuid/v1";

class App extends Component {
  state = {
    timers: []
  };

  addTimer = name =>
    this.setState({
      timers: [{ id: uuidv1(), name }, ...this.state.timers]  // Use uuidv1() here
    });

  removeTimer = id =>
    this.setState({
      timers: this.state.timers.filter(t => t.id !== id)
    });

  render() {
    return (
      <div className="container">
        <div className="create-timer">
          <input
            type="text"
            placeholder="Title"
            onKeyUp={e => {
              if (e.keyCode === 13) {
                this.addTimer(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
        <div className="timer-bench">
          {this.state.timers.map(t => (
            <Timer name={t.name} key={t.id} onRemove={() => this.removeTimer(t.id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
