import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
const Popsicle = (props) => {
const {popsicles} = props
    const loaded = () => (
        <div className="popsicles" >
        {popsicles.map((popsicle) => (         
           
           <article>            
             <h1>{popsicle.brand}</h1>
             <img src={popsicle.img} />
             <p>{popsicle.flavor}</p>
             <p>{popsicle.price}</p>
             
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
           return popsicles.length > 0 ? loaded() : loading;
      
    
}
export default Popsicle