import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const RemoveFromCartButton = (props) => {
  return (
    <button
      className="removeFromCartButton"
      onClick={() => {
        props.removeFromCart(props.product);
      }}
    >
      <FontAwesomeIcon
        className="trash-can"
        icon="fa-solid fa-cart-arrow-down"
      />
    </button>
  );
};

export default RemoveFromCartButton;
