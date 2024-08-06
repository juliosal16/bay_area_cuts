import React from 'react'
import './ShopInfo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShopInfo = () => {
  return (
    <div className='shopInfoBox centerTxt'>
    <Container>
      <Row>
      <Col >
         <ul>
            <h3>Location</h3>
            <li>602 N Hoover St <br /> Los Angeles, CA 12345</li>
           
          </ul>
        </Col>
        <Col >
         <ul>
            <h3>Hours</h3>
            <li>Tuesday — Friday</li>
            <li>7:00am — 5:30pm</li>
            <li>Saturday</li>
            <li>8:00am — 3:00pm</li>
          </ul>
        </Col>
        <Col >
         <ul>
            <h3>Contact</h3>
            <li>Silverlakebarbershop@gmail.com</li>
            <li>(323) 522-6638</li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ShopInfo