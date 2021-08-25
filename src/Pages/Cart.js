import React, { useState } from "react";
import Items from "../Componets/Items";

const Cart = (props) => {
  return (
    <div className="mycart">
      <h2 id="mycartTitle">My Cart</h2>
      <div className="cartBorderWrap">
        <div className="cartContainer">
          {/* map over items in our cart and print their */}
          {props.cart.map((item) => {
            return (
              <div className="cartLine">
                <p>{item.flavor}</p>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
