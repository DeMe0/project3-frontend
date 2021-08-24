import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';

const Drink = (props) => {
    const {drinks} = props      
        const loaded = () => (
            <div  className = 'drinks'>
            <Link to ='/menu'>
                    <button className ='menu'>
                    <AiOutlineArrowLeft />
                    </button>
                     </Link>
            {drinks.map((drink) => (               
               <article>
                <img src={drink.img} />
                <h1>{drink.brand}</h1>
                <p>{drink.flavor}</p>
                <p> $ {drink.price} <FontAwesomeIcon className="cart" icon={faCartArrowDown}/> </p>
              </article>
           ))}
              </div>
               )
           
               const loading = <h1>Loading...</h1>
               return drinks.length > 0 ? loaded() : loading;
}
export default Drink