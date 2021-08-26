import React, { useState } from "react";
import Items from "../Componets/Items";
import { Route, Link, Switch } from "react-router-dom";
import Checkout from "./Checkout";

import RemoveFromCartButton from "../Componets/RemoveFromCartButton";

const Cart = (props) => {
  const loaded = () => (
    <div className="mycart">
      <h2 id="mycartTitle">My Cart</h2>
      <div className="cartBorderWrap">
        <div className="cartContainer">
          <div className="cartColumnNames">
            <h4>Product</h4>
            <h4>Price</h4>
          </div>
          <div className="separator"></div>
          {/* map over items in our cart and print their */}
          {props.cart.map((item) => {
            return (
              <div className="cartLine">
                <RemoveFromCartButton removeFromCart={props.removeFromCart} />
                <p>{item.flavor}</p>
                <p>${item.price}</p>
              </div>
            );
          })}
          <div className="separator"></div>
          <div className="cartLine">
            <h3>Subtotal</h3>
            <h3>
              $
              {props.cart
                .map((price) => price.price)
                .reduce((acc, price) => +(price + acc).toFixed(2))}
            </h3>
          </div>
        </div>
        
      </div>
      <Checkout />
    </div>
  );
  const loading = (
    <div className="mycart">
      <h2 id="mycartTitle">My Cart</h2>
      <div className="cartBorderWrap">
        <div className="cartContainer">
          <h3>Cart Is Empty</h3>
        </div>
      </div>
      <div className="separator"></div>
     <Checkout />
    </div>
  );
  return props.cart.length > 0 ? loaded() : loading;
};

export default Cart;
