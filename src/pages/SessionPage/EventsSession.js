import React, { Component } from "react";
import styled from "styled-components";
import CodeImage from "../../resources/code-1.jpg";
import { colors } from "../../resources/ThemeColors";
import { CopyToClipboard } from "react-copy-to-clipboard";

class EventsSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
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
            <EventDate>07/06/2021</EventDate>
          </DateDiv>
        </ImageDiv>
        <SessionDescriptionDiv>
          <h2>JavaScript 101</h2>
          <p>A simple introduction to the fundamentals of JavaScript.</p>
          <h4>Steve Kibuika</h4>
          <ButtonsDiv>
            {this.state.copied ? (
              <p style={{ color: "#93329e", fontWeight: "500" }}>
                Link copied successfully.
              </p>
            ) : (
              <p>Link to the event</p>
            )}

            <LinkInput>https://meet.google.com/xoa-dpjs-kzd</LinkInput>
            <CopyToClipboard
              text="link here"
              onCopy={() => this.setState({ copied: true })}
            >
              <ClipBoardButton>Copy link to clipboard</ClipBoardButton>
            </CopyToClipboard>
          </ButtonsDiv>
        </SessionDescriptionDiv>
      </MainDiv>
    );
  }
}

export default EventsSession;

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
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
  }
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
    width: 40%;
  }

  @media (min-width: 1000px) {
    height: 70vh;
    width: 50%;
  }
`;

const DateDiv = styled.div`
  width: auto;
  position: absolute;
  top: 3px;
  left: 3px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 7px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0.1em;
  @media (min-width: 480px) {
    width: auto;
    top: 4px;
    left: 4px;
  }
`;
const EventDate = styled.p`
  line-height: 1.8;
  font-size: 0.8em;
  font-weight: 750;
  padding: 0.2em;
  color: ${colors.darkMainColor};
  text-align: center;
  @media (min-width: 480px) {
    font-height: 0.7em;
    line-height: 1.5;
    font-size: 0.9em;
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

  > h4 {
    font-size: 1em;
    font-weight: 600;
    margin-top: 1em;
    left: 10;
    position: absolute;
    padding-right: 3.5em;
    @media (min-width: 800px) {
      padding-right: 6em;
      font-size: 1.1em;
    }
  }

  @media (min-width: 480px) {
    width: 90%;
  }
  @media (min-width: 800px) {
    width: 80%;
    width: 70%;
    margin-left: 2em;
    margin-top: 0;
  }
`;

const ButtonsDiv = styled.div`
  height: auto;
  width: 50%;
  margin-top: 4em;
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 800px) {
    margin-top: 6em;
  }
`;

const LinkInput = styled.div`
  margin-top: 1em;
  width: auto;
  height: 2em;
  background-color: ${colors.white};
  color: ${colors.mainColor};
  padding-left: 0.5em;
  padding-right: 0.5em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const ClipBoardButton = styled.button`
  margin-top: 0.4em;
  width: auto;
  height: 2em;
  background-color: ${colors.mainColor};
  color: ${colors.white};
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 4px;

  :focus {
    outline: none;
  }
`;
