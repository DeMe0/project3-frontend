import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Main from "./Main";
import Navigation from "./Nav";
import Menu from "./Pages/Menu";
import Drink from "./Pages/Drink";
import IceCream from "./Pages/IceCream";
import ItalianIce from "./Pages/ItalianIce";
import Popsicle from "./Pages/Popsicle";
import Button from "./Componets/Buttons";

function App() {
  const url = "https://project3-icecream.herokuapp.com";
  const [parlours, setParlours] = useState([]);
  const getParlours = () => {
    fetch(url + "/parlours")
      .then((response) => response.json())
      .then((data) => setParlours(data));
  };
  useEffect(() => getParlours(), []);

  const [icecreams, setIcecreams] = useState([]);
  const getIcecreams = () => {
    fetch(url + "/icecream")
      .then((response) => response.json())
      .then((data) => setIcecreams(data));
  };

  useEffect(() => getIcecreams(), []);

  const [popsicles, setPopsicles] = useState([]);
  const getPopsicles = () => {
    fetch(url + "/popsicles")
      .then((response) => response.json())
      .then((data) => setPopsicles(data));
  };

  useEffect(() => getPopsicles(), []);

  const [ice, setIce] = useState([]);
  const getIce = () => {
    fetch(url + "/ice")
      .then((response) => response.json())
      .then((data) => setIce(data));
  };

  useEffect(() => getDrink(), []);
  const [drink, setDrink] = useState([]);
  const getDrink = () => {
    fetch(url + "/drinks")
      .then((response) => response.json())
      .then((data) => setDrink(data));
  };

  useEffect(() => getDrink(), []);

  return (
    <div className="App">
      <img
        className="logo"
        src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629589890/homemade_utscyu.png"
      ></img>
      <main>
        <Route
          exact
          path="/"
          render={(rp) => <Main {...rp} parlours={parlours} />}
        />
        <Route
          path="/menu"
          render={(rp) => <Menu {...rp} parlours={parlours} />}
        >
          <Button />
        </Route>
        <Route exact path="/drinks" render={() => <Drink drinks = {drink}/>}></Route>
        <Route exact path="/icecream" render={() => <IceCream icecreams = {icecreams}/>}></Route>
        <Route exact path="/ice" render={() => <ItalianIce ices = {ice}/>}></Route>
        <Route exact path="/popsicles" render={() => <Popsicle popsicles = {popsicles}/>}></Route>
        <Route path="/offers"></Route>
        <Route path="/about"></Route>
        <Route path="/cart"></Route>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
