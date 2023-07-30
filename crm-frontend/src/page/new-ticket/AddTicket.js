import React, {useEffect, useState} from 'react'
import { Breadcrumb, Container, Row,Col } from 'react-bootstrap'
import Pagebreadcrumb from '../../components/breadCrumb/breadcrumbscomp'
import AddTicketComp from '../../components/addticketform/AddTicketComp'
const initialFrmDt ={
    subject:"",
    issueDate:"",
    details:"",
  
  }
const AddTicket = () => {
    const [frmData, setFrmData] =useState(initialFrmDt)
    useEffect(()=>{}, [frmData]);
    const handleOnChange = e =>{
        const {name,value} =e.target;

        
        
        setFrmData({
            ...frmData,
            [name]:value,
        })
        console.log(name,value)
    }

    const handleOnSubmit = e=> {
        e.preventDefault()

        console.log('Form Submit request received',frmData)
    }
  return (
    <Container>
        <Row>
            <Col>
                <Pagebreadcrumb page="Add New Ticket" />
            </Col>
        </Row>

        <Row>
            <Col>
                <AddTicketComp  handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                    frmDt={frmData}
                />
            </Col>
        </Row>
    </Container>
  )
}

export default AddTicket