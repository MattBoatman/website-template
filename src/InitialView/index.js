import React from "react";
import styled, { keyframes } from "styled-components";
import beach from "./beach.jpg";

const fadeInOpacity = keyframes`
0% {
    opacity: 1;
}
100% {
    opacity: .55;
}
`;

const fadeInBanner = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${beach});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &::before {
    content: "";
    display: block;
    background-color: #000;
    height: 100vh;
    width: 100vw;
    animation-name: ${fadeInOpacity};
    animation-timing-function: ease-in;
    animation-duration: 2s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
`;
const Banner = styled.div`
  animation-name: ${fadeInBanner};
  animation-timing-function: ease-in;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  position: absolute;
  color: white;
  width: 80%;
`;

const StyledH1 = styled.h1`
  font-size: 3em;
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const StyledP = styled.p`
color: rgba(255, 255, 255, 0.85);
font-size: 1.75em;
@media (max-width: 600px) {
    font-size: 1em;
  }
`;


const InitialView = () => {
  return (
    <Wrapper>
      <Banner>
        <StyledH1>Lorem Ipsum</StyledH1>
        <StyledP>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah</StyledP>
      </Banner>
    </Wrapper>
  );
};

export default InitialView;
