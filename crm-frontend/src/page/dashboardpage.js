import React from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap';
import '../App.css'
import TicketTable from '../components/ticket-table/tickettable';
import tickets from '../assets/data/dummy-tickets.json'
const dashboardpage = () => {
  return (
    <Container>
    <Row>
        <Col className='text-center mt-5 mb-2'>
            <button className='bton  bg- #b21f66;'>Add new Ticket</button>
        </Col>
    </Row>
    <Row>
        <Col className='text-center mt-2 mb-2'>
            <div>Total tickets: 50</div>
            <div>Pending Tickest: 5</div>
        </Col>
    </Row>
    <Row>
        <Col className='mt-5 mb-2'>
            Recently Added tickets
        </Col>
    </Row>
    <Row>
        <Col className='recent-ticket'>
            <TicketTable tickets={tickets}/>
        </Col>
    </Row>
    </Container>
  )
}

export default dashboardpage