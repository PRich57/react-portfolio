import React from 'react';
import { useRef, useState } from React;
import emailjs from '@emailjs/browser';
import { Form, Button, Alert, Toast } from 'react-bootstrap';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notValid, setValid] = useState(false);

  const resetTextInput = () => {
    setName('');
    setEmail('');
    setMessage('');
    setValid(false);
  }
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d1wsx7u', 'template_tbo14vq', form.current, 'vXXRxcn4FhP4BEz55')
    .then((result) => {
      console.log(result.text);
      resetTextInput();
    }, (err) => {
      console.log(err.text);
    });
  };

  const nameSubmit = (e) => {
    setName(e.target.value)
    if (name) {
      setValid(false)
    }
  }

  const emailSubmit = (e) => {
    setEmail(e.target.value) 
    if (email) {
      setValid(false)
    }
  }

  const messageSubmit = (e) => {
    setMessage(e.target.value)
    if (message) {
      setValid(false)
    }
  }

  const validateEntry = (e) => {
    if (!e.target.value) {
      setValid(true)
    }
  }

  return ( 
  <>
    <Form 
      ref={form} 
      onSubmit={sendEmail} 
      className='d-flex lg-col-6 flex-column align-items-space-around'>
      <Form.Group 
        className="mb-3" 
        controlId="Form.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter your name" 
          name='user_name'
          className='contactInput'
          value={name}
          onChange={nameSubmit}
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
        controlId="Form.ControlInput2">
        <Form.Label>Email address:</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="name@example.com" 
          name='user_email'
          className='contactInput'
          value={email}
          onChange={emailSubmit}
        />
      </Form.Group>
      <Form.Group 
        className="mb-3" 
        controlId="Form.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={5} 
          name='message'
          type=''
        />
      </Form.Group>
    </Form>
    <h2>Contact</h2>
  </>
  );
}

export default ContactForm;