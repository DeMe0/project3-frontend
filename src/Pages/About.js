import React from 'react'
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className="About">
         <h1>About Frizzy</h1>
         <p>
Have you ever wanted ice cream delivered straight to your door, but found yourself lacking useful product information because popular delivery services don't offer it?
<br></br>
Well, with Frizzy - the specialized frozen dessert delivery service, any and all useful information pertaining to our dessert products will be available to you on our app.
<br></br>
Our goal is to provide a seamless experience for ordering your desserts, while giving you all the allergy and nutritional information you'd want.</p>
 <img src="https://i.pinimg.com/originals/91/f3/49/91f349982e7a5aff747d6284ae41b7d4.gif"></img>
 <hr></hr>
 <h1>Our Team</h1>
             <Card className="namecard" >
             <CardImg top width="100%" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629911166/image_hrbdgt.png" alt="Card image cap" />
            <CardBody>
            <CardTitle className="title" tag="h5">Christopher Johnson</CardTitle>   
            <CardText>A dastardly handsome man with passions geared towards problem-solving and all-around fun. Humour is there but it’s weird, jokes fall flat, especially the puns. Said 10 puns to see if they were good, but no puns in 10 did. He’s awesome, pretty cool, Life throws lemons but he’s got a glove for catching them.
            </CardText>
            <CardText>Favorite Ice-cream Flavor: Butter Pecan</CardText>
            </CardBody>
            </Card>
            <Card className="namecard" >
             <CardImg top width="100%" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629911805/475871415_bpnlrf.jpg" alt="Card image cap" />
            <CardBody>
            <CardTitle className="title" tag="h5">Stephanie Liu</CardTitle>   
            <CardText> With a strong background in art history and digital studies, Stephanie is passionate about creating aesthetically pleasing and fast-rendering websites. Ice-cream is her all time favorite food and her guilty pleasure. 
            </CardText>
            <CardText>Favorite Ice-cream Flavor:Blueberry Cheesecake</CardText>
            </CardBody>
            </Card>
            <Card className="namecard" >
             <CardImg top width="100%" src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1629911533/headshot_hiqmfm.jpg" alt="Card image cap" />
            <CardBody>
            <CardTitle className="title" tag="h5">Anthony Demeo</CardTitle>   
            <CardText> 
            </CardText>
            <CardText>Favorite Ice-cream Flavor:Cookies & Cream </CardText>
            </CardBody>
            </Card>
 </div>
    )
}

export default About
