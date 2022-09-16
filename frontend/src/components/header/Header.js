import React from 'react'
import {Nav, Navbar, NavDropdown,Container} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate=useNavigate()
  return (
    <Navbar bg="primary" expand="lg" variant='success'>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link >
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <NavDropdown title={<span className='text-white'>Account</span>}
         id="basic-nav-dropdown">
         
          <NavDropdown.Item href="#action/3.1">
            <Link  to="/login" style={{  textDecoration: 'none' }}>
            Login
          </Link >
          </NavDropdown.Item>
          <NavDropdown.Item
           onClick={()=>{localStorage.removeItem("userInfo");
           navigate('/')
          }}
          >
            Logout
          </NavDropdown.Item>

        </NavDropdown>
      </Container>
    </Navbar>
  )
}

export default Header
  