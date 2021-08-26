import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import Completionist from '../Componets/countdown';
import { Route, Link, Switch } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";


/* eslint react/no-multi-comp: 0, react/prop-types: 0 */


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Checkout= (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const Completionist = () => <span>You order is ready or already at your door, </span>;

  return (
    <div>
      <Button id= 'checkoutbutton' color="danger" onClick={toggle}>Checkout!{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader  id='title'>YOUR ORDER</ModalHeader>
        <ModalBody>
          
          <div>
            <Countdown style ={{"fontSize": "32px"}} date={Date.now() + 1800000}>
      <Completionist />
    </Countdown>
        <h1>Thank you for your purchase</h1>
        <p>We appreciate you! </p>
        <p>You order is being processed and will be delivered when countdown reaches 0</p>
        
      
        </div>

        </ModalBody>
        <ModalFooter>
        <Link to="/">
             <Button color="secondary" className="home">
                Home!          
             </Button>
      </Link>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}




export default Checkout