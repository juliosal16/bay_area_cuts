import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import './BookNow.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookNow = (props) => {

  const [minDate, setMinDate] = useState('');
  const form = useRef();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const handleSub = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jg2l5ym', 'template_yc3awkm', form.current, 'hO6g3YmtDo7r2GTR8')
      .then(
        () => {
          console.log('SUCCESS!');
          notify()
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("There was an error!");

        }
      );

    e.target.reset();
  };

  const notify = () => 
    toast.success(' Thank you for booking with Bay Area Cuts, see you soon', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });


  return (
    <div className='bookNowBox'>
      <h1 className='centerTxt' style={{marginTop: '3%'}}>Book an appointment</h1>
      <Form ref={form} onSubmit={handleSub}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control required name="userName" placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control required name="userEmail" type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Date</Form.Label>
            <Form.Control required name="date" type='date' min={minDate} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Services</Form.Label>
            <Form.Select name='service'>
              <option disabled>Select a service</option>
              <option value="Classic Haircut">Classic Haircut</option>
              <option value="Hot Towel Shave">Hot Towel Shave</option>
              <option value="Beard Trim">Beard Trims</option>
              <option value="Razor Head Shaves">Razor Head Shaves</option>
              <option value="Buzzcut haircut">Buzzcut</option>
              <option value="Full Service">Full Service</option>
              <option value="Haircut Beard Trim">Haircut + Beard Trim</option>
              <option value="Kids haircut">Kids Haircut</option>
              <option value="Lineups">Lineups</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Phone</Form.Label>
            <Form.Control required name="phone" placeholder='(555) 123-4567'/>
          </Form.Group>
        </Row>
        <Button  className='bookButton' type="submit">
          Book
          <ToastContainer />
        </Button>
      </Form>
    </div>
  );
}

export default BookNow;
