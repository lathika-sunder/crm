import React from 'react'; // Remove { handleOnChange }
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>
        Reply
      </Form.Label>
      <br />
      <Form.Text>Please reply to your message or update the Ticket</Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        value={msg}
        onChange={handleOnChange}
        name="detail"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className='bton-sm mt-4 mb-4'>Submit</button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default UpdateTicket;
