import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Main from './Main'
import Navigation from './Nav'

function App() {
  const url="https://project3-icecream.herokuapp.com"
  const[parlours,setParlours]= useState([])
  const getParlours = ()=>{ 
    fetch(url + "/parlours")
    .then((response) => response.json())
    .then((data) => setParlours(data))
  }
  useEffect(() => getParlours(), []);

  const[icecreams,setIcecreams]= useState([])
  const getIcecreams= ()=>{ 
    fetch(url + "/icecream")
    .then((response) => response.json())
    .then((data) => setIcecreams(data))
  }
  
  useEffect(() => getIcecreams(), []);

  const[popsicles,setPopsicles]= useState([])
  const getPopsicles= ()=>{ 
    fetch(url + "/popsicles")
    .then((response) => response.json())
    .then((data) => setPopsicles(data))
  }
  
  useEffect(() => getPopsicles(), []);

  const[ice,setIce]= useState([])
  const getIce= ()=>{ 
    fetch(url + "/ice")
    .then((response) => response.json())
    .then((data) => setIce(data))
  }
  
  useEffect(() => getIce(), []);
   


  return (
    <div className="App">
      <img className="logo" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629589890/homemade_utscyu.png"></img>
     <main>
     <Route exact path="/"
            render={(rp) => <Main {...rp} parlours={parlours} 
            />}
    />
     <Route path="/menu"></Route>
     <Route path="/offers"></Route>
     <Route path="/about"></Route>
     <Route path="/cart"></Route>
     </main>
     <Navigation/>
    </div>
  );
}

export default App;
