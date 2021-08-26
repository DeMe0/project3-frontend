import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../Componets/AddToCartButton";

const ItalianIce = (props, index) => {
  const { ices } = props;
  // console.log(icecreams)
  const loaded = () => (
    <div className="italianices" key={index}>
      <Link to="/menu">
        <button className="menu">
          <AiOutlineArrowLeft />
        </button>
      </Link>
      {ices.map((ice) => (
        <article>
          <img src={ice.img} />
          <h1>{ice.brand}</h1>
          <p>{ice.flavor}</p>
          <p>$ {ice.price}</p>
          <AddToCartButton addToCart={props.addToCart} product={ice} />
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;
  return ices.length > 0 ? loaded() : loading;
};
export default ItalianIce;
