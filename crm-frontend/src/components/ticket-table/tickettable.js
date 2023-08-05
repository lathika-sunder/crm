import React from 'react'
import {Table} from 'react-bootstrap'
import '../../App.css'
import tickets from '../../assets/data/dummy-tickets.json'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const TicketTable = ({tickets}) => {

  if(tickets.length)
  return (
    <Table   striped bordered hover>
      <thead>

        <tr>
          <th className='bg-black text-white'>S.no</th>
          <th className='bg-black text-white'>Subject</th>
          <th className='bg-black text-white'>Status</th>
          <th className='bg-black text-white'>Opened</th>
        </tr>
      </thead>
      <tbody>
      {tickets.length ? tickets.map(row=>
        <tr key={row.id}>
  <td>{row.id}</td>
  <td>
  <Link to={`/ticket/${row.id}`}>
    {row.subject}
  </Link>
</td>

  
  <td>{row.status}</td>
  <td>{row.addedAt}</td>
</tr>):(
<tr>
  <td colSpan={4} className='text-center'>No ticket to show</td>
</tr>)}


      </tbody>
    </Table>
  )
}

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired
}

export default TicketTable