import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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