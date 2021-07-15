import React from "react";
// import { NavLink } from "react-router-dom";
//import { DropdownButton} from 'react-bootstrap/DropdownButton'
//import {Dropdown} from 'react-bootstrap/Dropdown'
// import Dropdown from "bootstrap/js/dist/dropdown"; 
// import DropdownButton from "bootstrap/js/src/dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = () => {
  return (
    <>

<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    </>
  );
};

export default Navbar;