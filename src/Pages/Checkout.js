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
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader  id='title'>YOUR ORDER</ModalHeader>
        <ModalBody>
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
          <div>
            <Countdown date={Date.now() + 1800000}>
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