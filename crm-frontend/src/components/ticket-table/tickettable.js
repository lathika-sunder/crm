import React from 'react'
import {Table} from 'react-bootstrap'
import '../../App.css'
const TicketTable = ({tickets}) => {
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
  <td>{row.subject}</td>
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

export default TicketTable