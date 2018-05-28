import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Copy>© Untitled. All rights reserved. Design and Development: <A target="_blank" href="http://matthewboatman.com/">Matt Boatman </A></Copy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 6em 2em 4em 2em;
`;

const Copy = styled.div`
  color: #bfbfbf;
  font-size: 0.9em;
  margin: 0 0 2em 0;
  padding: 0;
  text-align: center;
`;
const A = styled.a`
    text-decoration: none;
`;
export default Footer;
