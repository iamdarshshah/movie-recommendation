import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Movie Recommendation</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/movies/now-playing'>Now Playing</Nav.Link>
          <Nav.Link href='/movies/top-rated'>Top Rated</Nav.Link>
          <Nav.Link href='/movies/upcoming'>Upcoming</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
