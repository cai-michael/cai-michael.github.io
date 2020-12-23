import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { NavLink } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <NavLink onClick={setOpen} activeClassName="current" to="/">
        Home
      </NavLink>
      <NavLink onClick={setOpen} activeClassName="current" to="/resume">
        Resume
      </NavLink>
      <NavLink onClick={setOpen} activeClassName="current" to="/contact">
        Contact
      </NavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
