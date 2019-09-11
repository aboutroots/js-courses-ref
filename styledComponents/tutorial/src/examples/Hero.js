import styled from "styled-components";

import img3 from "../images/foto3.jpg";

const Hero = styled.div`
  min-height: ${props => (props.big ? "100vh" : "50vh")};
  background-image: url(${props => (props.img ? props.img : img3)});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hero;
