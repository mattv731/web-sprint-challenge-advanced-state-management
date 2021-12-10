import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurf } from "./actions/index";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ({fetchSmurf})=> {

useEffect(() => {
  fetchSmurf()
}, [])

  return (
    <div className="App">
      <Header />
      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    smurfs: {
    id: state.smurfs.id,
    name: state.smurfs.name,
    position: state.smurfs.position,
    nickname: state.smurfs.nickname,
    description: state.smurfs.description
    },
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchSmurf})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.