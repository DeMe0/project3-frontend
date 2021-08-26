import React from "react";
// import Button from "./Button";

const Items = (props) => {
  const loaded = () => {
    return (
      <div className="item">
        <div className="itemcontent">
          <div className="itemFlavor">{props.selected.flavor}</div>
          <div className="itemPrice">{props.selected.price}</div>
        </div>
        <img src={props.selected.img} alt={props.selected.flavor} />
        {/* <Button
          className="button"
          dispatch={props.removeFromCart}
          product={props.product}
          label="Remove From Cart"
        /> */}
      </div>
    );
  };

  const loading = () => {
    return <h1 className="loading">Items loading...</h1>;
  };

  return props.selected ? loaded() : loading();
};
export default Items;
