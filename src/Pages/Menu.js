import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import Drink from './Drink'
import IceCream from './IceCream';
import ItalianIce from './ItalianIce';
import Popsicle from './Popsicle';
import Button from '../Componets/Buttons'
import Card from '../Componets/Card'
import BootstrapCard from '../Componets/Card';


const Menu = (props) => {
    return(
        <div className="cards">
            <Button />
         <BootstrapCard/>
          </div>
       )
}
export default Menu