import React from "react";
import styled, { keyframes } from "styled-components";
import beach from "./beach.jpg";

const handleClick = () => {
  document
    .getElementById("dallasMassage")
    .scrollIntoView({ behavior: "smooth" });
};
const InitialView = () => {
  return (
    <Wrapper>
      <Banner>
        <StyledH1>Outcall Massage Therapy by Kimberly</StyledH1>
        <StyledP>
          Stressed? Bring the relaxation straight to your door. Kimberly offers 24/7 relaxation
          to hotel guests in Dallas, Grapevine, Las Colinas, Irving, Lewisville,
          and more! Call now{' '}
          <A href="tel:817-301-8334">(817) 301-8334</A>
        </StyledP>
        <Button onClick={handleClick}>Learn More</Button>
      </Banner>
    </Wrapper>
  );
};

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
`;

const Button = styled.button`
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
  :hover {
    background-color: #e7e7e7;
  }
`;

const StyledP = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.75em;
  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const A = styled.a`
  color: rgba(255, 255, 255, 0.85);
`;

export default InitialView;
