import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Pagebreadcrumb from '../../components/breadCrumb/breadcrumbscomp'
import tickets from '../../assets/data/dummy-tickets.json'
import '../../App.css'
import MessageHistorycomp from '../../components/message-history/messageHistorycomp'
import UpdateTicket from '../../components/update-ticket/UpdateTicket'
import { useParams } from 'react-router-dom'
//const ticket=tickets[0]
const Ticket = () => {
    const { tId } = useParams();
    
    const [message,setMessage] =useState("");
    const [ticket,setTicket] =useState("");
    useEffect(()=>{
        for (let i = 0; i < tickets.length; i++) 
        {
            if(tickets[i].id==tId)
            {
                setTicket(tickets[i])
                continue
            }
            
        }
    },[message,tId]);

    const handleOnChange =e =>{
        setMessage(e.target.value);
    }
    const handleOnSubmit =e=>
    {
        alert("Submitted");
    }
  return (

    <Container>
        <Row>
           <Col>
            <Pagebreadcrumb page="Ticket" />
           </Col>
        </Row>
        <Row>
        
        {ticket ? (
    <Col className='text-weight-bolder text-secondary'>
        
        <div className='subject'>Subject : {ticket.subject}</div>
        <div className='date'>Ticket Opened : {ticket.addedAt}</div>
        <div className='status'>Status : {ticket.status}</div>
    </Col>
) : (
    <Col>Loading...</Col>
)}
            <Col className='text-right'>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button className='closebton'>Close Ticket</button>
    </div>
            </Col>
        </Row>
        <Row>
            <Col>
            {tickets &&<MessageHistorycomp msg={ticket.history}/>}
            </Col>
        </Row>
        <br />
        <Row className='mt-4 '>
        <Col>
            <UpdateTicket msg={message}
             handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
             />
        </Col>

        </Row>
    </Container>
  )
}



export default Ticket