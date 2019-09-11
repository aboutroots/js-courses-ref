import styled from "styled-components";

export const BasicInput = styled.input.attrs(props => ({
  type: props.type || "number",
  placeholder: "enter some text"
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
