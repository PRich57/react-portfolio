import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Toast } from 'react-bootstrap';
import "../styles/components/Contact.css";

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notValid, setNotValid] = useState(false);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
      setNotValid(false);
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  });

  const form = useRef();

  const resetTextInput = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setNotValid(true);
      setShowSuccessMessage(false);
      return;
    }

    emailjs.sendForm(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, form.current, import.meta.env.VITE_PUBKEY)
      .then((result) => {
        console.log(result);
        resetTextInput();
        setNotValid(false);
        setShowSuccessMessage(true);
      }, (err) => {
        console.log(err.text);
        setShowSuccessMessage(false);
      });

    
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    if (!e.target.value) {
      setNotValid(true);
    } else {
      setNotValid(false);
    }
  }

  return (
    <>
      <Form ref={form} onSubmit={sendEmail} className='d-flex lg-col-6 flex-column align-items-space-around'>
        <Form.Group className="mb-3" controlId="Form.ControlInput1">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name='from_name'
            className='contactInput'
            value={name}
            onChange={handleChange(setName)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput2">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name='reply_to'
            className='contactInput'
            value={email}
            onChange={handleChange(setEmail)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name='message'
            className='contactInput'
            value={message}
            onChange={handleChange(setMessage)}
          />
        </Form.Group>
        {notValid && (
          <Toast className='contactInput container toastF' variant='info'>
            Please fill out all input fields before sending.
          </Toast>
        )}
        {showSuccessMessage && (
          <Toast className='contactInput container toastS' variant='success'>
            Your message has been sent successfully!
          </Toast>
        )}
        <Button className='submitBtn' type='submit'>
          Send
        </Button>
      </Form>
      <h2>Contact</h2>
    </>
  );
}

export default ContactForm;