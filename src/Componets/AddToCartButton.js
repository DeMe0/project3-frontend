import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const AddToCartButton = (props) => {
  return (
    <button
      className="button"
      onClick={() => {
        props.addToCart(props.product);
      }}
    >
      <FontAwesomeIcon className="cart" icon={faCartArrowDown} />
    </button>
  );
};

export default AddToCartButton;
