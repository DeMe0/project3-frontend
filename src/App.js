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
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Footer from "./Componets/Footer";
import Checkout from './Pages/Checkout'

function App() {
  const url = "https://project3-icecream.herokuapp.com";
  const [parlours, setParlours] = useState([]);
  const [originalParlours, setOriginalParlours] = useState([]);

  const getParlours = () => {
    fetch(url + "/parlours")
      .then((response) => response.json())
      .then((data) => {
        setOriginalParlours(data);
        setParlours(data);
      });
  };
  useEffect(() => getParlours(), []);

  const filterParlours = (filter) => {
    console.log(originalParlours);
    let newState = originalParlours.filter((item) => {
      console.log(item.city, filter);
      return item.city === filter;
    });

    setParlours(newState);
  };

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

  const [cart, setCart] = useState([]);
  const [fullInventory, setFullInventory] = useState([]);

  const getFullInventory = async () => {
    const response = await fetch(
      "https://project3-icecream.herokuapp.com/fullinventory"
    );
    const data = await response.json();
    console.log(data);
    const productArr = data.map((item, index) => {
      return {
        price: item.price,
        flavor: item.flavor,
      };
    });
    setFullInventory(productArr);
    console.log(productArr);
  };
  const addToCart = (product) => {
    console.log("add to cart", product);
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((thing) => product === thing);
    const updatedArray = [...cart];
    updatedArray.splice(index, 1);
    setCart(updatedArray);
  };

  useEffect(() => {
    getFullInventory();
  }, []);

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
          render={(rp) => (
            <Main {...rp} parlours={parlours} filterParlours={filterParlours} />
          )}
        />
        <Route
          path="/menu"
          render={(rp) => <Menu {...rp} parlours={parlours} />}
        ></Route>
        <Route
          exact
          path="/drinks"
          render={() => <Drink drinks={drink} addToCart={addToCart} />}
        ></Route>
        <Route
          exact
          path="/icecream"
          render={() => (
            <IceCream icecreams={icecreams} addToCart={addToCart} cart={cart} />
          )}
        ></Route>
        <Route
          exact
          path="/ice"
          render={() => <ItalianIce ices={ice} addToCart={addToCart} />}
        ></Route>
        <Route
          exact
          path="/popsicles"
          render={() => (
            <Popsicle popsicles={popsicles} addToCart={addToCart} />
          )}
        ></Route>
        <Route
          path="/offers"
          render={() => <Offers offers={offer} addToCart={addToCart} />}
        ></Route>
        <Route path="/about"><About /></Route>
        <Route path="/cart">
          <Cart
            fullInventory={fullInventory}
            cart={cart}
            removeFromCart={removeFromCart}
          />
        </Route>
        <Route exact path ='/checkout'>
          <Checkout />
        </Route>
      </main>
      <Footer />
      <Navigation />
    </div>
  );
}

export default App;
