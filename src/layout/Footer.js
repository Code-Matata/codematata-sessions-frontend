import React from "react";
import { colors } from "../resources/ThemeColors";
import styled from "styled-components";

function Footer() {
  return (
    <MainDiv>
      <FooterContent>
        <TitleDiv>Products</TitleDiv>
        <ContentDiv>
          <a
            href="https://tusomeni.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tusomeni
          </a>
        </ContentDiv>
      </FooterContent>
      <FooterContent>
        <TitleDiv>Socials</TitleDiv>
        <ContentDiv>
          <a href="/">Twitter</a>
          <a href="/">LinkedIn</a>
          <a href="/">Facebook</a>
        </ContentDiv>
      </FooterContent>
      <FooterContent>
        <TitleDiv>Collaborate?</TitleDiv>
        <ContentDiv>
          <a href="/">Find the repo here</a>
        </ContentDiv>
      </FooterContent>
    </MainDiv>
  );
}

export default Footer;

const MainDiv = styled.div`
  background-color: ${colors.darkMainColor};
  color: ${colors.white};
  height: auto;
  width: 100%;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (min-width: 850px) {
    padding: 2em 6em 2em 6em;
  }
`;

const FooterContent = styled.div`
  height: 20vh;
  width: 30%;
`;

const TitleDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: 650;
  letter-spacing: 1.2px;
`;

const ContentDiv = styled.div`
  margin-top: 1em;
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  > a {
    margin-top: 0.5em;
    font-size: 0.9em;
    cursor: pointer;
  }
`;
