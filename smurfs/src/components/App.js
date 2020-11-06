import React, { Component } from "react";
import AddSmurf from './AddSmurf'
import "./App.css";
import SmurfVillage from "./SmurfVillage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
        <AddSmurf/>
        <SmurfVillage/>
      </div>
    );
  }
}

export default App;
