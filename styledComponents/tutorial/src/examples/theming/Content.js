import React from "react";
import styled from "styled-components";

const Content = ({ className }) => {
  return (
    <section className={className}>
      <h3>section title</h3>
      <p>
        lerem ipsum text lerem ipsum textlerem ipsum textlerem ipsum textlerem
        ipsum text lerem ipsum textlerem ipsum textlerem ipsum textlerem ipsum
        text
      </p>
    </section>
  );
};

export default styled(Content)`
  text-transform: capitalize;
  padding: 2rem;
  ${props => `background:${props.theme.secondaryColor}`};
  ${props => `color:${props.theme.primaryColor}`};
`;
