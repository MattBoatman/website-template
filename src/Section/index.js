import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CircleImage from "../CircleImage";


const Section = ({
  backgroundColor,
  color,
  paragraphs,
  flipPhoto,
  imageSrc,
  title,
  id,
  buttonText,
  scrollId
}) => {
  const handleClick = () => {
    console.log(scrollId)
    document
      .getElementById(scrollId)
      .scrollIntoView({ block: 'center', behavior: "smooth" });
  };
  return (
    <StyledSection backgroundColor={backgroundColor} color={color} id={id}>
      <Wrapper flipPhoto={flipPhoto}>
        <WrapperImage>
          <CircleImage imageSrc={imageSrc} backgroundColor={backgroundColor} />
        </WrapperImage>
        <WrapperText>
          <StyledH3>{title}</StyledH3>
          {paragraphs.map((p, idx) => (
            <StyledP key={idx} color={color}>
              {p}
            </StyledP>
          ))}
          <StyledP />
          {scrollId && <Button onClick={handleClick}>{buttonText}</Button>}
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
  width: 85%;
  margin: 0 auto;
  display: flex;
  text-align: justify;
  align-items: center;
  flex-direction: ${props => (props.flipPhoto ? "row-reverse" : "row")};
  @media (max-width: 850px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
  }
`;
const WrapperText = styled.div`
  width: 60%;
  margin: 0 25px;
  @media (max-width: 850px) {
    width: 100%;
    margin: 0;
  }
`;
const WrapperImage = styled.div`
  width: 30%;
  display: inline-block;
  @media (max-width: 850px) {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
`;
const StyledH3 = styled.h3`
  font-size: 1.75em;
  @media (max-width: 850px) {
    font-size: 1.3em;
  }
`;
const StyledP = styled.p`
  font-size: 1.1em;
  opacity: 0.6;
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
Section.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  paragraphs: PropTypes.array,
  flipPhoto: PropTypes.bool,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
Section.defaultProps = {
  paragraphs: [],
  flipPhoto: false
};

export default Section;
