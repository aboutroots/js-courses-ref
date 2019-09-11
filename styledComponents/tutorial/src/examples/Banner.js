import React from "react";

import styled from "styled-components";

const Banner = ({ title, className, children, color }) => {
  return (
    <div className={className} color={color}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default styled(Banner)`
  color: ${props => props.color};
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;

  h1 {
    margin: 0;
    padding: 0;
  }

  h1:hover {
    color: grey;
  }
`;
