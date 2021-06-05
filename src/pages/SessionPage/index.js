import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log("Access token", localStorage.getItem("ACCESS_TOKEN"));
  }
  render() {
    return (
      <MainDiv>
        <SessionDescriptionDiv>
          <h2>JavaScript 101 with Steve Kibuika</h2>
          <p>A simple introduction to the fundamentals of JavaScript.</p>
          <ButtonsDiv>
            <IframeDiv
              src="https://www.youtube.com/embed/GQZ5UP49Mh0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></IframeDiv>
          </ButtonsDiv>
        </SessionDescriptionDiv>
      </MainDiv>
    );
  }
}

export default SessionPage;

const MainDiv = styled.div`
  height: auto;
  padding: 6em 1.5em 2em 1.5em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.gray};
  @media (min-width: 600px) {
    padding-top: 8em;
  }
  @media (min-width: 800px) {
    padding-top: 8em;
  }
`;

const SessionDescriptionDiv = styled.div`
  height: auto;
  width: 100%;
  margin-top: 2em;

  > h2 {
    font-size: 1.2em;
    text-align: left;
    font-weight: bold;
    color: ${colors.darkMainColor};
    @media (min-width: 800px) {
      font-size: 1.5em;
    }
  }

  > p {
    font-size: 0.9em;
    text-align: left;
    margin-top: 0.7em;
    colors: ${colors.mainColor};
    @media (min-width: 800px) {
      font-size: 1.1em;
    }
  }
  @media (min-width: 480px) {
    width: 90%;
  }
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const ButtonsDiv = styled.div`
  height: auto;
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const IframeDiv = styled.iframe`
  margin-top: 1em;
  width: 100%;
  height: 250px;
  border-radius: 7px;
  @media (min-width: 480px) {
    height: 300px;
  }
  @media (min-width: 800px) {
    height: 350px;
  }
`;
