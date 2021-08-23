
import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import Drink from './Drink'
import IceCream from './IceCream';
import ItalianIce from './ItalianIce';
import Popsicle from './Popsicle';
import Button from '../Componets/Buttons'
const Menu = () => {
    return(
        <>
               <main>
            <Switch>
                <Route
                    exact path ='/menu'
                    render={() => (
                        <Button />
                    )}>
                </Route>
                <Route exact path='/drinks'
                render={() => (
                    <Drink />
                  )}></Route>
                   <Route exact path='/icecreams'
                render={() => (
                    <IceCream />
                  )}></Route>
                   <Route exact path='/italianices'
                render={() => (
                    <ItalianIce />
                  )}></Route>
                   <Route exact path='/popsicles'
                render={() => (
                    <Popsicle />
                  )}></Route>
            </Switch>
        </main>
        </>
    )
}
export default Menu