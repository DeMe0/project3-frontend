import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
const Drink = (props) => {
    const {drinks} = props      
        const loaded = () => (
            <div  className = 'drinks'>
            {drinks.map((drink) => (               
               <article>
                <img src={drink.img} />
                 <h1>{drink.brand}</h1>
                 <p>{drink.flavor}</p>
                 <p>{drink.price}</p>
                
              </article>
           ))}
           <Link to ='/menu'>
                    <button className ='menu'>
                    <AiOutlineArrowLeft />
                    </button>
                     </Link>
              </div>
               )
           
               const loading = <h1>Loading...</h1>
               return drinks.length > 0 ? loaded() : loading;
}
export default Drink