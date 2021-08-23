import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Parlour= (props) => {
    const {parlours } = props;

 const loaded = () => (
      <div className="parlour">
      {parlours.map((parlour) => (
         <article>
          <img src={parlour.img} />
           <h1>{parlour.name}</h1>
           <p id="address">{parlour.address}</p>
           <p id="rating"><FontAwesomeIcon className="star" icon={faStar}/>      {parlour.rating}  ({parlour.ratingQty} ratings)</p>
        </article>
     ))}
        </div>
    )
       
const loading = <h1>Loading...</h1>

return parlours.length > 0 ? loaded() : loading;


 };


export default Parlour; 
