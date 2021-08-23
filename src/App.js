import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Menu from './Pages/Menu'
function App() {
  return (
    <div className="App">
      <h1>Front-End Test Text</h1>
      <Menu />
    </div>
  );
}

export default App;
