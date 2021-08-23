import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
const Drink = () => {
    return(
        <div>
            <h1>DRINKS!!!!</h1>
             <Link to ='/menu'>
                <button className ='menu'>
                    <AiOutlineArrowLeft />
                </button>
                </Link>
        </div>
        
    )
}
export default Drink