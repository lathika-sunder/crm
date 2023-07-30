import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import logo from '../../assets/img/logo.png' 
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar
     collapseOnSelect
    className='header-page'
    variant='dark'
    expand='md'>
      <Navbar.Brand className='nav'>
        <img src={logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav' >
          <Nav className="ml-auto">
            <Nav.Link className='nav' href='../../page/dashboardpage' ><div className='text-white'>Dashboard</div></Nav.Link>
            <Nav.Link className='nav' href='/dashboard'><div className='text-white'>Tickets</div></Nav.Link>
            <Nav.Link className='nav' href='/dashboard'><div className='text-white'>About Us</div></Nav.Link>
            <Nav.Link className='nav' href='/dashboard'><div className='text-white'>Logout</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar> )
}

export default Header