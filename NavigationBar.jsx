import React, {useNavigate} from 'react'
import Scissors from './icons/scissors.svg';
import './index.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {

  return (
  <Navbar data-bs-theme="dark" expand="lg" className="navbar-custom"  sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/">
        <img
             alt="Scissors"
             src={Scissors}
             width="35"
             height="32"
             className="d-inline-block align-top"/>{' '} Bay Area Cuts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/ourMission">About</Nav.Link>
           <Nav.Link href="/pricing">Pricing</Nav.Link>
           <Nav.Link href="/barbers">Barbers</Nav.Link>
           <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav.Link href="/bookNow"><Button className='bookBtn' variant="outline-success">Book Now</Button></Nav.Link>
            
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavigationBar