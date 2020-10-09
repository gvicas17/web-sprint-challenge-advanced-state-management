import React, { useEffect } from "react";
import "./App.css";
import {fetchSmurfs} from '../actions/actions';
import {connect} from 'react-redux';
import {AddSmurfForm} from '../components/form'



function App (props) {
  useEffect(() => {
    props.fetchSmurfs()
  }, [])

    return (
      <div className="App">
        <header>
        <h1>SMURF VILLAGE</h1>
        </header>
        <div>
          <AddSmurfForm/>
        </div>
        {props.smurfs.map (smurf => (
          <div>
          <h2>{smurf.name}</h2>
          <h4>Age: {smurf.age}</h4>
          <h4>Height: {smurf.height}</h4>
          </div>
        ))}
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return{
      smurfs: state.smurfs
    }
  }


export default connect(mapStateToProps, {fetchSmurfs})(App);
