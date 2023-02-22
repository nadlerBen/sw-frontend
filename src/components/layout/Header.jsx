import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  margin: 10px;
  padding-inline-start: 10px;
`;

const StyledLink = styled(Link)`
  padding-inline-start: 10px;
`;

const Header = () => {
  return (
    <NavBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/favorites">Favorites</StyledLink>
    </NavBar>
  );
};

export default Header;
