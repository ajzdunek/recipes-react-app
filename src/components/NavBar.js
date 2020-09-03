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
        <NavbarBrand href="/"><span role="img" aria-label="apple chicken">🍎🍗</span> A to Z Recipe Search <span role="img" aria-label="steak avocado">🥩🥑</span></NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;