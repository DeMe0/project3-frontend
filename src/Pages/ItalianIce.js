import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
const ItalianIce= (props, index) => {
    const {ices} = props
    // console.log(icecreams)
    const loaded = () => (
        <div className="italianices" key ={index}>
        {ices.map((ice) => (
            
            
           <article>
            
             <h1>{ice.brand}</h1>
             <img src={ice.img} />
             <p>{ice.flavor}</p>
             <p>{ice.price}</p>
            
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
           return ices.length > 0 ? loaded() : loading;
}
export default ItalianIce