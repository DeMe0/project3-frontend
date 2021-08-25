import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons';


const Popsicle = (props) => {
const {popsicles} = props
    const loaded = () => (
      <>
       <Link to ='/menu'>
                <button className ='menu'>
                <AiOutlineArrowLeft />
                </button>
                 </Link>
         <div className="popsicles" > 
             
        {popsicles.map((popsicle) => (         
           <article>  
             <img src={popsicle.img} />          
             <h1>{popsicle.brand}</h1>
             <p>{popsicle.flavor}</p>
             <p>$ {popsicle.price}<FontAwesomeIcon className="cart" icon={faCartArrowDown}/> </p>
             
           </article>
       ))}
      
          </div>
      </>
       
           )
       
           const loading = <h1>Loading...</h1>
           return popsicles.length > 0 ? loaded() : loading;
      
    
}
export default Popsicle