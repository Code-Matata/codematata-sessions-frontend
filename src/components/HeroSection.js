import React from "react";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";
import CodeImage from "../resources/code-1.jpg";
import TypeEffect from "./TypeEffect";
// import SearchCard from "../components/SearchComponent";

function HeroSection() {
  return (
    <MainDiv>
      <TopDiv>
        <HeroTextDiv>
          <HeroText>Made for those who &nbsp;</HeroText>
          <TypeEffect />
        </HeroTextDiv>
        {/* <SearchCard /> */}
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
  padding-bottom: 4.5em;
  background-color: ${colors.main};
  z-index: -1;
  @media (min-width: 800px) {
    padding-bottom: 1.5em;
  }
`;

const TopDiv = styled.div`
  height: 40vh;
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
  @media (min-width: 800px) {
    height: 50vh;
  }
`;

const HeroTextDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 3em 2em 0em 2em;
`;

const HeroText = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 1.7em;

  @media (min-width: 800px) {
    font-size: 2.5em;
  }
`;
