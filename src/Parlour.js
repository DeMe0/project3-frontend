import React from "react";

const Parlour= (props) => {
    const {parlours } = props;

 const loaded = () => (
      <div className="parlour">
      {parlours.map((parlour) => (
         <article>
          <img src={parlour.img} />
           <h1>{parlour.name}</h1>
           <p id="city">{parlour.city}</p>
           <p id="address">{parlour.address}</p>
           <p id="rating">{parlour.rating}</p>
           <p id="ratingQTY">{parlour.ratingQty}</p>
        </article>
     ))}
        </div>
    )
       
const loading = <h1>Loading...</h1>

return parlours.length > 0 ? loaded() : loading;


 };


export default Parlour; 
