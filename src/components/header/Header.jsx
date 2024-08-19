import React from 'react'
import "./header.css"
import { Container,Navbar,Button,Nav } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  <section id="menu">
<Navbar expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            
          <Link to="/">   Home   </Link>
            <Link to="/about">   About  </Link>
            <Link to="/service">   Services  </Link>
            <Link to="/work">   works  </Link>
            <Link to="/blog">   Blog   </Link>
          </Nav>
          <div className="mb-2">
        <Button variant="primary" size="lg">
          Contact us
        </Button>{' '}
        
      </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  </section>
  )
}

export default Header