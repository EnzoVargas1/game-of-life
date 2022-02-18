import React from 'react';
import { Navbar, NavbarBrand, Container, Col} from 'reactstrap';

const Header = () =>{

    return(
        <div>
       <Navbar
    color="dark"
    dark
    expand="sm"
  >
     <Container>
    <Col md={{
        offset: 4,
        size: 'auto'
      }}>
    <NavbarBrand>
      <h3>Conway's Game of Life</h3>
    </NavbarBrand>
    </Col>
    </Container>
  </Navbar>
       
   </div>
   );

}


export default Header;