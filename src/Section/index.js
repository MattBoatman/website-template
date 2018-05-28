import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CircleImage from "../CircleImage";

const Section = ({ backgroundColor, color, paragraphs, flipPhoto, imageSrc }) => {
  return (
    <StyledSection backgroundColor={backgroundColor} color={color}>
      <Wrapper flipPhoto={flipPhoto}>
        <WrapperImage >
          <CircleImage imageSrc={imageSrc} backgroundColor={backgroundColor} />
        </WrapperImage>
        <WrapperText>
          <StyledH3>Section</StyledH3>
          {paragraphs.map((p, idx) => <StyledP key={idx} color={color}>{p}</StyledP>)}
          <StyledP />
        </WrapperText>
      </Wrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100vw;
  padding: 6em 0 4em 0;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: justify;
  align-items: center;
  flex-direction: ${props => props.flipPhoto ? 'row-reverse' : 'row'};
  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
  }
`;
const WrapperText = styled.div`
  width: 60%;
  margin: 0 25px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
const WrapperImage = styled.div`
  width: 30%;
  display: inline-block;
  @media (max-width: 600px) {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
`;
const StyledH3 = styled.h3`
  font-size: 1.75em;
  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`;
const StyledP = styled.p`
  font-size: 1.1em;
  opacity: 0.6;
  @media (max-width: 600px) {
    /* font-size: 1.5em; */
  }
`;
Section.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  paragraphs: PropTypes.array,
  flipPhoto: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
};
Section.defaultProps = {
    paragraphs: [],
    flipPhoto: false
}

export default Section;
