import React from 'react';
import Proptypes from 'prop-types';
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
const LoginForm = ({handleOnChange,handleOnSubmit, formSwitcher, email, pass}) => {

  const buttonStyle = {
    backgroundColor: '#384160',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };
  return (

    
    <Container>
      <Row>
        <Col>
          <h1>
            Client login
          </h1>
          <br/>
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
     <Form.Control
     type="email"
      name="email"
      value={email}
      onChange={handleOnChange}
      placeholder="Enter email"
     required
     />
  </Form.Group>
  <Form.Group>
    <Form.Label>Password</Form.Label>
     <Form.Control
     type="password"
      name="password"
      value={pass}
      onChange={handleOnChange}
      placeholder="Enter password"
      required
     />
  </Form.Group>
  <br/>

  <Button style={buttonStyle} type="submit">Login</Button>
</Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" onClick={()=>formSwitcher('reset')}>Forget Password</a>
        </Col>
      </Row>
    </Container>
  )
}

LoginForm.propTypes={
 handleOnChange: Proptypes.func.isRequired,
 handleOnSubmit: Proptypes.func.isRequired,
 formSwitcher: Proptypes.func.isRequired,
 email:Proptypes.string.isRequired,
 pass:Proptypes.string.isRequired
}

export default LoginForm
