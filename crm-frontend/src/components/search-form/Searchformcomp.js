import React from 'react'
import { Form, Col,Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
const Searchformcomp = ({handleOnChange, str}) => {
  
    return (
    <Form>
        <Form.Group as={Row}>
            <Form.Label column sm="3">
            Search:{""}
            </Form.Label> 
            <Col sm="9">
                <Form.Control
                name="searchStr"
                onChange={handleOnChange}
                value={str}
                type="text"
                placeholder='Search...' />
            </Col>
        </Form.Group>
    </Form>
  )
}

Searchformcomp.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str:PropTypes.string.isRequired
}

export default Searchformcomp