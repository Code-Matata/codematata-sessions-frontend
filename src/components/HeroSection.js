import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";
import CodeImage from "../resources/code-1.jpg";
import TypeEffect from "./TypeEffect";
import SearchCard from "../components/SearchComponent";

function HeroSection() {
  return (
    <MainDiv>
      <TopDiv>
        <HeroTextDiv>
          <HeroText>Made for those who &nbsp;</HeroText>
          <TypeEffect />
        </HeroTextDiv>
        <SearchCard />
      </TopDiv>
    </MainDiv>
  );
}

export default HeroSection;

const MainDiv = styled.div`
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 4em;
  background-color: ${colors.main};
  z-index: -1;
`;

const TopDiv = styled.div`
  height: 45vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
    url(${CodeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
`;

const HeroTextDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 1em 2em 0em 2em;
`;

const HeroText = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 1.7em;
`;
