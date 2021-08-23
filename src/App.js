import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Main from './Main'

function App() {
  return (
    <div className="App">
      <img className="logo" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629589890/homemade_utscyu.png"></img>
    <main>
     <Route exact path="/">
     <Main/>
     </Route>
     


    </main>
    </div>
  );
}

export default App;
