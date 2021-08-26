import React from 'react'
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import Button from './Buttons';
import { Route, Link, Switch } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const styles = {
    card: {
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 55,
      height: '100%'
    }
  }

const BootstrapCard = () => {
    return (
        <div className="BootstrapCard">
     <Container fluid>
       
      <CardGroup className="m-5 d-block" id="cards">
      
        <Card className="m-5 border-0 shadow" id = 'drinkCard' style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={"https://www.thespruceeats.com/thmb/0luI0n1yLV4zUao0OIgaABN1z94=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/HardRock-TwistShout-crop-595e25a15f9b58843f60dea5.jpg"} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h1">Ice Cream Drinks</Card.Title>
              <Card.Text as="h4" style={styles.cardText}>
               11 items
              </Card.Text>
              </Card.Body>
            </Col>
           
          </Row>
        </Card>
        <Link to ='/drinks'>
            <button className ='menubutton'>
                <AiOutlineArrowRight />
            </button>
        </Link>
        <Card className="m-5 border-0 shadow" id = 'icecreamCard' style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={"https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/07/salt-and-straw.jpg"} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h1">Ice-Cream</Card.Title>
              <Card.Text as="h4" style={styles.cardText}>
               17 items
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Link to ='/icecream'>
            <button className ='menubutton'>
            <AiOutlineArrowRight />
            </button>
        </Link>
        <Card className="m-5 border-0 shadow" id = 'icesCard' style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={"https://media.timeout.com/images/101227987/image.jpg"} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h1">Italian Ice</Card.Title>
              <Card.Text as="h4" style={styles.cardText}>
               18 items
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Link to ='/ice'>
            <button className ='menubutton'>
            <AiOutlineArrowRight className = 'icearrow'/>
            </button>
        </Link>
        <Card className="m-5 border-0 shadow" id = "popCard" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src={"https://ohiomagazine.imgix.net/sitefinity/images/default-source/articles/2020/07---july-august/pineapple-mango-passion-fruit-blackberry-lemon-basil-and-blueberry-lemonade-popsicles.jpg?sfvrsn=c55ea438_6&w=960&auto=compress%2Cformat"} style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
              <Card.Title as="h1">Popsicles</Card.Title>
              <Card.Text as="h4" style={styles.cardText}>
               17 items
              </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Link to ='/popsicles'>
            <button className ='menubutton'>
            <AiOutlineArrowRight />
            </button>
        </Link>
      </CardGroup>
    </Container> 
    
        </div>
    )
}

export default BootstrapCard

