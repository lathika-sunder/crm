import React from 'react';
import Proptypes from 'prop-types';
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
const ResetPassword = ({handleOnChange,handleOnResetSubmit, formSwitcher, email}) => {

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
            Password Reset
          </h1>
          <br/>
<Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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

  <br/>

  <Button style={buttonStyle} type="submit">Reset Password</Button>
</Form>
        </Col>
        <Row>
        <Col>
        <a href="#" onClick={()=>formSwitcher('login')}>Login Now?</a>
        </Col>
      </Row>
      </Row>
    </Container>
  )
}

ResetPassword.propTypes={
 handleOnChange: Proptypes.func.isRequired,
 handleOnSubmit: Proptypes.func.isRequired,
 formSwitcher: Proptypes.func.isRequired,
 email:Proptypes.string.isRequired,

}

export default ResetPassword 
