import React, { useState } from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel'
import Parlour from './Parlour'


const Main = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

 
    return (
        <div className="main">
        <p>Delivering to</p>
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Current Location</DropdownToggle>
         <DropdownMenu>
        <DropdownItem>Chicago</DropdownItem>
        <DropdownItem>Los Angeles</DropdownItem>
        <DropdownItem>Las Vegas</DropdownItem>
        <DropdownItem>New York City</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        <h2>Ice Cream of the Day</h2>
        <Carousel/>
        <h3 className="subtitle">Parlours Near You </h3>
        <Parlour  parlours={props.parlours}
        />
        </div>
    ); 
}

export default Main
