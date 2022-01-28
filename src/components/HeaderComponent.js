import React from 'react';
import {Navbar, Container, NavbarBrand} from 'react-bootstrap';

const Header = () =>{

    return(
        <>
        <Navbar bg="darker"  variant="dark">
    <Container>
      <NavbarBrand><h1>Game of Life</h1></NavbarBrand>
    </Container>
  </Navbar>
   </>
   );

}


export default Header;