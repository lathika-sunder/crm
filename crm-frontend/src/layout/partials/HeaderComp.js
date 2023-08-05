import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect className='header-page' variant='dark' expand='md'>
      <Navbar.Brand className='nav'>
        <img src={logo} alt='logo' className='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Link className='nav' to='/dashboard'>
            <div className='text-white'>Dashboard</div>
          </Link>
          <Link className='nav' to='/tickets'>
            <div className='text-white'>Tickets</div>
          </Link>
          <Link className='nav' to='/aboutus'>
            <div className='text-white'>About Us</div>
          </Link>
          <div className='nav' onClick={logMeOut}>
            <div className='text-white'>Logout</div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
