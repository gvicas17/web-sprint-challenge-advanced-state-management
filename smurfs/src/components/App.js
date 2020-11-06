import React, { Component } from "react";
import { AddSmurf } from "./AddSmurf";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
        <AddSmurf/>
      </div>
    );
  }
}

export default App;
