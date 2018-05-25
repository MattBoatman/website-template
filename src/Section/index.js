import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100vw;
  padding: 6em 0 4em 0;
  background-color: #F7F9FB;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;
const StyledH3 = styled.h3`
  font-size: 1.75em;
  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`;
const StyledP = styled.p`
  font-size: 1.1em;
  opacity: .6;
  @media (max-width: 600px) {
    /* font-size: 1.5em; */
  }
`;

const Section = () => {
  return (
    <StyledSection>
      <Wrapper>
        <StyledH3>Section</StyledH3>
        <StyledP>Hi ADFKADJF Aaldkjfl jkdla jkflajfl jdal jffladknclknad jnl kjaldfkn lak lakdnf lkan flna lfnadlfn aldn flan dfln fljal jklamcalkjd flkj lakf alk</StyledP>
      </Wrapper>
    </StyledSection>
  );
};

export default Section;
