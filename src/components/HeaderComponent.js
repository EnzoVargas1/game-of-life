import React from 'react';
import {Nav, Navbar, NavbarToggler, Collapse, NavItem, NavLink, NavbarText, 
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand, Container} from 'reactstrap';

const Header = () =>{

    return(
        <div>
       <Navbar
    color="dark"
    dark
    expand="xl"
  >
     <Container>
    <NavbarBrand href="/" className="col-sm-12 offset-md-3">
      <br/>
      <h1>Game of Life</h1>
      <br/>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    </Container>
  </Navbar>
       
   </div>
   );

}


export default Header;