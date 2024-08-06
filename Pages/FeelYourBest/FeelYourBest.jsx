import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FeelYourBest.css'

const FeelYourBest = ({mainTxt, infoTxt, pic}) => {
  return (
    <Container>
    <Row>
      <Col>
        <img src={pic} alt="Comb" style={{height: '80vh'}} />
      </Col>
     

      <Col className='txt' style={{marginTop: '20%' }}>
        <h1>{mainTxt} </h1> 
        <p>{infoTxt}</p>
      </Col>
    </Row>
  </Container>
  )
}

export default FeelYourBest