import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
//layout
import HeroSection from "../../components/HeroSection";
import EventsComponent from "../../components/EventsComponent/EventsComponent";

class MainPage extends Component {
  constructor(props) {
    super(props);
    console.log("home", props);
  }
  render() {
    return (
      <MainDiv>
        <HeroSection />
        <EventsComponent />
      </MainDiv>
    );
  }
}

export default MainPage;

const MainDiv = styled.div`
  height: auto;
  background-color: ${colors.lightGray};
`;
