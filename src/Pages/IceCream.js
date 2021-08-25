import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../Componets/AddToCartButton";

const IceCream = (props, index) => {
  const { icecreams } = props;
  // console.log(icecreams)
  const loaded = () => (
    <div className="icecream" key={index}>
      <Link to="/menu">
        <button className="menu">
          <AiOutlineArrowLeft />
        </button>
      </Link>
      {icecreams.map((icecream) => (
        <article>
          <img src={icecream.img} />
          <h1>{icecream.brand}</h1>
          <p>{icecream.flavor}</p>
          <p className="price"> $ {icecream.price} </p>
          <AddToCartButton addToCart={props.addToCart} product={icecream} />
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;
  return icecreams.length > 0 ? loaded() : loading;
};
export default IceCream;
