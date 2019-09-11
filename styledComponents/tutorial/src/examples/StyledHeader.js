import React from "react";

import styled from "styled-components";

const StyledHeader = ({ title }) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <h2 className="random">another header</h2>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  background-color: red;
  transition: all 2s ease-in-out;
  h1 {
    color: blue;
  }
  .random {
    color: green;
  }
  &:hover {
    background: black;
  }
`;

export default StyledHeader;
