import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'

const Contact = () => {
  return (
    <Container className='contactBox'>
      <Row>
        <hr />
        <Col>
          <h1 className='contactH1'>Silver Lake, Los Angeles</h1>
          <p>602 N Hoover St</p>
          <p>Los Angeles, CA</p>
          <p>90004</p>
          <h5>CONTACT <br /> 
          Silverlakebarbershop@gmail.com <br />
          (323)-522-6638
          </h5>
        </Col>
        <Col>
        <div style={{ width: '100%'}}>
         <iframe
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=602%20N%20Hoover%20St%20Los%20Angeles,%20CA%2090004+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Map">
            <a href="https://www.gps.ie/">gps tracker sport</a>
         </iframe>
      </div>
        </Col>
      </Row>
    </Container>
    

  )
}

export default Contact