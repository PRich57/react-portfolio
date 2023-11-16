import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Toast } from 'react-bootstrap';
import "../styles/components/Contact.css";

function ContactForm() {
  // Declare variables to get state of input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Declare variable to determine whether input is valid
  const [notValid, setNotValid] = useState(false);

  // Create way to display success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Use useEffect to make the success or invalid messages appear for 3 seconds
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

  // Clear out user input from input fields
  const resetTextInput = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  // Create sendEmail function
  const sendEmail = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setNotValid(true);
      setShowSuccessMessage(false);
      return;
    }

    // Use emailJS with .env protected keys
    emailjs.sendForm('service_d1wsx7u', 
      'template_vmxvdqx', 
      form.current, 
      'vXXRxcn4FhP4BEz55')
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

  // Create function to handle alerting user about required input in input fields
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
      <h4>
        Let's build something cool together!
      </h4>
      <h3>
        Send me a message!
      </h3>
      <h2>Contact</h2>
    </>
  );
}

export default ContactForm;