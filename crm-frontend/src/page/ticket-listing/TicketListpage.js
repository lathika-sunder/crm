import React, { useEffect, useState } from 'react'
import '../../App.css'
import {Container,Row,Col,Button } from 'react-bootstrap'
import Pagebreadcrumb from '../../components/breadCrumb/breadcrumbscomp'
import Searchformcomp from '../../components/search-form/Searchformcomp'
import TicketTable from '../../components/ticket-table/tickettable'
import tickets from '../../assets/data/dummy-tickets.json'
import { Link } from 'react-router-dom'
const TicketListpage = () => {

  const [str,setStr]=useState("")
  const[dispTicket, setDispticket] =useState(tickets)

  useEffect(()=>{
  }, [str,dispTicket])

  const handleOnChange =(e)=> {
    const {value} =e.target;
    setStr(value);
    searchTicket(value);
  
  }

  const searchTicket = (sttr) => {
    // If str is empty, show all tickets, otherwise filter based on the search term   
     const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
      );
      
      setDispticket(displayTickets)
  
  }
  return (
    <Container>
      <Row>
        <Col>
          <Pagebreadcrumb page="Ticket List"/>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <Link to='/add-ticket'>
         <button className='bton-sm'>Add New Ticket</button>
         </Link>
        </Col>
        <Col className='text-right'>
          <Searchformcomp handleOnChange={handleOnChange} str={str}/>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <TicketTable tickets={dispTicket}/>
        </Col>
      </Row>
    </Container>
  )
}

export default TicketListpage