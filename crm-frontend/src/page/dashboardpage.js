import React from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap';
import '../App.css'
import { Link } from 'react-router-dom';
import TicketTable from '../components/ticket-table/tickettable';
import tickets from '../assets/data/dummy-tickets.json'
import Pagebreadcrumb from '../components/breadCrumb/breadcrumbscomp';
const Dashboardpage = () => {
  return (
    <Container>
    <Row>
        <Col className='mt-3 mb-1'>
       

        <Pagebreadcrumb page='Dashboard'/>
        
            
        </Col>
    </Row>
    <Row>
    <Link to='/add-ticket'>
    <Col className='text-center mt-5 mb-2'>
            <button className='bton  bg- #b21f66;'>Add new Ticket</button>
        </Col>
         </Link>
       
    </Row>
    <Row>
        <Col className='text-center mt-2 mb-2'>
            <div>Total tickets: 50</div>
            <div>Pending Ticket: 5</div>
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

export default Dashboardpage