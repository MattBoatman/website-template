import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";


const CircleImage = ({imageSrc, backgroundColor}) => {
    return (
        <ImageWrapper backgroundColor={backgroundColor}>
            <Image src={imageSrc} />
        </ImageWrapper>
    );
};

const ImageWrapper = styled.div`
    border-radius: 100%;
    box-shadow: ${props => `0px 0px 0px 7px ${props.backgroundColor}, 0px 0px 0px 8px rgba(0, 0, 0, 0.1)`}
`;
const Image = styled.img`
    border-radius: 100%;
    width: 100%;
`;

CircleImage.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  };

export default CircleImage;