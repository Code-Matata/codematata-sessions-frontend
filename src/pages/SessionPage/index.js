import React, { Component } from "react";
import styled from "styled-components";
import CodeImage from "../../resources/code-1.jpg";
import { colors } from "../../resources/ThemeColors";

class SessionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  height: 90vh;
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
    height: 100%;
    width: 100%;
    border-radius: 7px;
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
`;
const EventDate = styled.p`
  line-height: 1.8;
  font-size: 1em;
  font-weight: 750;
  padding-top: 0.2em;
  padding-left: 0.2em;
  color: ${colors.darkMainColor};
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
  }

  > p {
    font-size: 0.9em;
    text-align: left;
    margin-top: 0.7em;
    colors: ${colors.mainColor};
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
  width: 322px;
  height: 250px;
`;
