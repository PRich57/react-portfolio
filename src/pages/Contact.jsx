import Form from 'react-bootstrap/Form';

function ContactForm() {
  return ( 
  <>
    <Form className='d-flex lg-col-6 flex-column align-items-space-around'>
      <Form.Group className="mb-3" controlId="Form.ControlInput1">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlInput2">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
    </Form>
    <h2>Contact</h2>
  </>
  );
}

export default ContactForm;