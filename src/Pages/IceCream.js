import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';

const IceCream = (props, index) => {
  
    const {icecreams} = props
    // console.log(icecreams)
    const loaded = () => (
   <div>
      <Link to ='/menu'>
       <button className ='menu'>
        <AiOutlineArrowLeft />
       </button>
        </Link>
   <div className="icecream" key ={index}> 
        
        {icecreams.map((icecream) => (
           <article>
            <img src={icecream.img} />
             <h1>{icecream.brand}</h1>
             <p>{icecream.flavor}</p>
             <p className="price"> $ {icecream.price} <FontAwesomeIcon className="cart" icon={faCartArrowDown}/> </p>
          </article>
       ))}
          </div>
       </div>
      
           )
       
           const loading = <h1>Loading...</h1>
           return icecreams.length > 0 ? loaded() : loading;
}
export default IceCream