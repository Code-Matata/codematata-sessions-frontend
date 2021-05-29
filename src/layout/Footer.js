import React from "react";
import { colors } from "../resources/ThemeColors";
import styled from "styled-components";
import Github from "../resources/icons/github.png";
import TwitterLogo from "../resources/icons/twitter.png";
import FacebookLogo from "../resources/icons/facebook.png";
import LinkedInLogo from "../resources/icons/linkedin.png";

function Footer() {
  return (
    <MainDiv>
      <FirstDiv>
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
            <IconText href="/">
              <Icon src={TwitterLogo} alt=""></Icon>
              <Text>Twitter</Text>
            </IconText>
            <IconText href="/">
              <Icon src={LinkedInLogo} alt=""></Icon>
              <Text>LinkedIn</Text>
            </IconText>
            <IconText href="/">
              <Icon src={FacebookLogo} alt=""></Icon>
              <Text>Facebook</Text>
            </IconText>
          </ContentDiv>
        </FooterContent>
        <FooterContent>
          <TitleDiv>Collaborate?</TitleDiv>
          <ContentDiv>
            <IconText
              href="https://github.com/Code-Matata"
              target="_blank"
              rel="noreferrer"
            >
              <Icon src={Github} alt=""></Icon>
              <Text>GitHub Organization</Text>
            </IconText>
          </ContentDiv>
        </FooterContent>
      </FirstDiv>
      <SecondDiv>
        <CopyRight>
          &copy; CodeMatata {new Date().getFullYear()}. All Rights Reserved.
        </CopyRight>
        <Attribute>
          Illustrations by <a href="https://www.freepik.com/">Freepik</a>
        </Attribute>
      </SecondDiv>
    </MainDiv>
  );
}

export default Footer;

const MainDiv = styled.div`
  height: auto;
  background-color: ${colors.darkMainColor};
  color: ${colors.white};
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const FirstDiv = styled.div`
  height: auto;
  width: 100%;
  padding: 2em 1em 2em 1em;
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

  @media (min-width: 850px) {
    height: 30vh;
  }
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
`;

const SecondDiv = styled.div`
  height: auto;
  border-top: 1px solid white;
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const CopyRight = styled.p`
  font-size: 0.8em;
  font-weight: 500;
  padding-top: 1em;
  padding-bottom: 0.5em;
`;

const Attribute = styled.p`
  font-size: 0.6em;
  font-weight: 500;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const IconText = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;

  @media (min-width: 850px) {
    margin-top: 0.7em;
  }
`;

const Icon = styled.img`
  height: 1.5em;
  width: 1.5em;

  @media (min-width: 850px) {
    height: 2em;
    width: 2em;
  }
`;

const Text = styled.p`
  margin-left: 0.4em;
  display: none;

  @media (min-width: 500px) {
    display: flex;
  }
`;
