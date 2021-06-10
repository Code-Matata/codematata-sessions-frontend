import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
//layout
import HeroSection from "../../components/HeroSection";
import EventsComponent from "../../components/EventsComponent/EventsComponent";
import EventsComponentHeader from "../../components/EventsComponent/EventsComponentHeader";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "events" };
  }

  handleActiveTab = (tabName) => {
    this.setState({ activeTab: tabName });
    console.log("active tab", tabName);
  };

  render() {
    return (
      <MainDiv>
        <HeroSection />
        <EventsComponentHeader handleActiveTab={this.handleActiveTab} />
        <EventsComponent activeTab={this.state.activeTab} />
      </MainDiv>
    );
  }
}

export default MainPage;

const MainDiv = styled.div`
  height: auto;
  background-color: ${colors.lightGray};
`;
