import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import AddToCartButton from "../Componets/AddToCartButton";

const Popsicle = (props) => {
  const { popsicles } = props;
  const loaded = () => (
    <div className="popsicles">
      <Link to="/menu">
        <button className="menu">
          <AiOutlineArrowLeft />
        </button>
      </Link>
      {popsicles.map((popsicle) => (
        <article className="productCard">
          <img src={popsicle.img} />
          <h1>{popsicle.brand}</h1>
          <p>{popsicle.flavor}</p>
          <div className="priceLine">
            <p className="price">$ {popsicle.price}</p>
            <AddToCartButton addToCart={props.addToCart} product={popsicle} />
          </div>
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;
  return popsicles.length > 0 ? loaded() : loading;
};
export default Popsicle;
