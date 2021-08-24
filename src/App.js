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
import Offers from "./Pages/Offers";
import Footer from "./Componets/Footer";

function App() {
  const url = "https://project3-icecream.herokuapp.com";
  const [parlours, setParlours] = useState([]);
  const [originalParlours, setOriginalParlours] = useState([])
  

  const getParlours = () => {
    fetch(url + "/parlours")
      .then((response) => response.json())
      .then((data) =>{
         setOriginalParlours(data)
         setParlours(data)});
  };
  useEffect(() => getParlours(), []);

const filterParlours = (filter) => {
  console.log(originalParlours)
    let newState = originalParlours.filter((item) =>{
      console.log(item.city, filter)
      return item.city === filter
      
    })
    
    setParlours(newState)
}

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

  useEffect(() => getIce(), []);
  const [drink, setDrink] = useState([]);
  const getDrink = () => {
    fetch(url + "/drinks")
      .then((response) => response.json())
      .then((data) => setDrink(data));
  };

  useEffect(() => getDrink(), []);

  useEffect(() => getIce(), []);
  const [offer, setOffer] = useState([]);
  const getOffers = () => {
    fetch(url + "/offers")
      .then((response) => response.json())
      .then((data) => setOffer(data));
  };

  useEffect(() => getOffers(), []);

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
          render={(rp) => <Main {...rp} parlours={parlours} filterParlours = {filterParlours}/>}
        />
        <Route
          path="/menu"
          render={(rp) => <Menu {...rp} parlours={parlours} />}
        >
        </Route>
        <Route exact path="/drinks" render={() => <Drink drinks = {drink}/>}></Route>
        <Route exact path="/icecream" render={() => <IceCream icecreams = {icecreams}/>}></Route>
        <Route exact path="/ice" render={() => <ItalianIce ices = {ice}/>}></Route>
        <Route exact path="/popsicles" render={() => <Popsicle popsicles = {popsicles}/>}></Route>
        <Route path="/offers" render={() =><Offers offers={offer}/> }></Route>
        <Route path="/about"></Route>
        <Route path="/cart"></Route>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
