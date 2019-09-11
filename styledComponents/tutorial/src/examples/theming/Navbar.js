import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Navbar = ({ children }) => {
  return (
    <NavWrapper>
      <Title title="company name" />
      {children}
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: ${props => props.theme.primaryColor};
  ${props => `color:${props.theme.secondaryColor}`};
  padding: 1rem;
  text-transform: capitalize;
  display: flex;
  justify-content: space-around;
`;

export default Navbar;
