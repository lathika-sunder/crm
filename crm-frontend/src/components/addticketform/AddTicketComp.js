import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'
import '../../App.css';

const AddTicketComp = ({ handleOnChange, handleOnSubmit ,frmDt}) => {

 console.log({frmDt});
  const buttonStyle = {
    backgroundColor: '#384160',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  };


  return (
  
    <div className='jumbopage' expand='md'>
    
    <br/>
     <Row>
        <Col  expand='md'lg={6} md={12}> {/* Form column */}
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
  <Form.Group>
    <Form.Label>Subject</Form.Label>
     <Form.Control
      name="subject"
      value={frmDt.subject}
      onChange={handleOnChange}
      minLength='5'
      placeholder="Enter Subject"
     required
     />
  </Form.Group>
  <Form.Group>
    <Form.Label>Date</Form.Label>
     <Form.Control
     type="date"
      name="issueDate"
      value={frmDt.issueDate}
      onChange={handleOnChange}
     
      required
     />
  </Form.Group>
  <Form.Group>
    <Form.Label>Details</Form.Label>
     <Form.Control
     as="textarea"
     minLength='10'
      name="details"
      rows='4'
      value={frmDt.details}
      onChange={handleOnChange}
      
      required
     />
  </Form.Group>
  <br/>

<button  type="submit" style={buttonStyle}>Submit Info</button>
          </Form>
        </Col>
        <Col lg={6}> {/* Image column */}
          <img src={`${process.env.PUBLIC_URL}/CRM.png`}  className="d-none d-lg-block" alt="CRM" />
        </Col>
      </Row>
      
     
    </div>
  );
}

AddTicketComp.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired
}

export default AddTicketComp;
