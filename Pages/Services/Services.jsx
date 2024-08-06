import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Services.css'

const Services = () => {
  return (
    <div>
        <h3 className='serviceTxt centerTxt'>Services</h3>
        <Container style={{textAlign: 'center'}}>
      <Row>
        <Col >
         <ul>
            <li>Classic Haircut</li>
            <li>Hot Towel Shave</li>
            <li>Beard Trims</li>
            <li>Razor Head Shaves</li>
            <li>Buzzcut</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Full Service</li>
            <li>Haircut + Beard Trim</li>
            <li>Head Shave + Beard Trim</li>
            <li>Kids Haircut</li>
            <li>Lineups</li>
         </ul>
        </Col>
      </Row>
    </Container>
     
    </div>
  )
}

export default Services