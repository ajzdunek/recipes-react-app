import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavBar = (props) => {
 

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div class="container">
        <NavbarBrand href="/">🍎🍗 A to Z Recipe Search 🥩🥑</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;