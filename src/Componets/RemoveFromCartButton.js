import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTrashAlt } from "react-icons/fa";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const RemoveFromCartButton = (props) => {
  return (
    <button
      className="removeFromCartButton"
      onClick={() => {
        props.removeFromCart(props.product);
      }}
    >
      <FaTrashAlt id="trashIcon" />
    </button>
  );
};

export default RemoveFromCartButton;
