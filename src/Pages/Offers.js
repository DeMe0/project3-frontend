import React from 'react';
// import { Link } from 'react-router-dom'
// import { AiOutlineArrowLeft } from "react-icons/ai";
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Offers = (props) => {
    const {offers} = props
    const loaded = () => (
       <div className="offers" > 
        {offers.map((offer) => ( 
           <article className = 'odisplay'>
            <Card className="bootstrapcard" >
             <CardImg top width="100%" src={offer.img} alt="Card image cap" />
             <CardBody>
             <CardTitle className="title" tag="h5">{offer.title}</CardTitle>   
             <CardText>{offer.description}
               </CardText>
               <CardText><button>Apply Coupon</button>
               </CardText>
             </CardBody>
             </Card>
          </article>
       ))}
     </div> )

    
           const loading = <h1>Loading...</h1>
           return offers.length > 0 ? loaded() : loading;
}

export default Offers
