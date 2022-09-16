import React from 'react'
import { Container, Navbar, NavDropdown } from 'react-bootstrap'
import "./Adminheader.css"
import { Link } from 'react-router-dom'

const Adminheader = () => {
  return (
    <div>
          <Navbar bg='info' expand="lg" variant='success'>
              <Container >
                  <Navbar.Brand className='text-light' href="#home">Admin-Pannel</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                  <NavDropdown title={<span className='text-white'>Options</span>} id="basic-nav-dropdown">
                      {/* <NavDropdown.Item> <Link to='/admin/edituser' style={{ textDecoration: 'none' }}>Edit-user</Link> </NavDropdown.Item>
                      <NavDropdown.Item ><Link to='/admin/user' style={{ textDecoration: 'none' }}>User-Manage</Link></NavDropdown.Item> */}
                      <NavDropdown.Item ><Link to='/admin' style={{ textDecoration: 'none' }}>Logout</Link></NavDropdown.Item>
                  </NavDropdown>
              </Container>
          </Navbar>      
    </div>
  )
}

export default Adminheader
