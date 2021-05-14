import React, { Component } from "react";
//layout
import HeroSection from "../../components/HeroSection";
import styled from "styled-components";

class MainPage extends Component {
  render() {
    return (
      <MainDiv>
        <HeroSection />
      </MainDiv>
    );
  }
}

export default MainPage;

const MainDiv = styled.div`
  height: auto;
`;
