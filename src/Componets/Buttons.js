import React from 'react'
import { Route, Link, Switch } from "react-router-dom";

const Button = () => {
    return(
        <>
        <Link to ='/drinks'>
            <button className ='drinks'>

            </button>
        </Link>
        <Link to ='/icecreams'>
            <button className ='drinks'>

            </button>
        </Link>
        <Link to ='/italianices'>
            <button className ='drinks'>

            </button>
        </Link>
        <Link to ='/popsicles'>
            <button className ='drinks'>

            </button>
        </Link>
        </>
    )
}

export default Button