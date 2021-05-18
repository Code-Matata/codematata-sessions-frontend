import React, { Component } from "react";
import styled from "styled-components";
import CodeImage from "../../resources/code-1.jpg";
import { colors } from "../../resources/ThemeColors";

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <MainDiv>
        <ImageDiv>
          <img src={CodeImage} alt="code" loading="lazy"></img>
          <DateDiv>
            <EventDate>
              Sep
              <br />
              18
            </EventDate>
          </DateDiv>
        </ImageDiv>
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
  padding: 2em 1.5em 2em 1.5em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.gray};
`;

const ImageDiv = styled.div`
  background-color: ${colors.gray};
  height: 25vh;
  width: 100%;
  border-radius: 7px;
  position: relative;

  > img {
    flex-shrink: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 7px;
  }

  @media (min-width: 480px) {
    width: 90%;
    height: 30vh;
  }
  @media (min-width: 600px) {
    height: 35vh;
  }
  @media (min-width: 800px) {
    height: 45vh;
    width: 80%;
  }

  @media (min-width: 1000px) {
    height: 50vh;
  }
`;

const DateDiv = styled.div`
  width: 2.5em;
  position: absolute;
  top: 3px;
  right: 3px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 7px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) {
    width: 2em;
  }
`;
const EventDate = styled.p`
  line-height: 1.8;
  font-size: 1em;
  font-weight: 750;
  padding: 0.2em;
  color: ${colors.darkMainColor};
  text-align: center;
  @media (min-width: 480px) {
    font-height: 0.7em;
    line-height: 1.5;
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
