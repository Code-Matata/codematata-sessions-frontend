import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import CodeImage from "../../resources/code-1.jpg";
import { withRouter } from "react-router-dom";

class EventsCard extends Component {
  state = {};
  redirect = (name) => {
    this.props.history.push({ pathname: "/session", search: `?name=${name}` });
  };
  render() {
    return (
      <MainCardDiv onClick={() => this.redirect("js")}>
        <ImageDiv>
          <img src={CodeImage} alt="session" loading="lazy"></img>
        </ImageDiv>
        <EventDescriptionDiv>
          <DateDiv>
            <EventDate>
              Sep
              <br />
              18
            </EventDate>
          </DateDiv>
          <TextDescriptionDiv>
            <DescriptionTitle>
              JavaScript 101 with Steve Kibuika
            </DescriptionTitle>
            <Description>
              A simple introduction to the fundamentals of JavaScript.
            </Description>
          </TextDescriptionDiv>
        </EventDescriptionDiv>
      </MainCardDiv>
    );
  }
}

export default withRouter(EventsCard);

const MainCardDiv = styled.button`
  height: 17em;
  width: 16em;
  border-radius: 5px;
  background-color: ${colors.white};
  margin: 1em 1em 2em 1em;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  transition: box-shadow 500ms;
  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  :focus {
    outline: none;
  }

  @media (min-width: 800px) {
    height: 19em;
    width: 18em;
  }
`;

const ImageDiv = styled.div`
  height: 10.5em;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
  @media (min-width: 800px) {
    height: 12.5em;
  }
`;

const EventDescriptionDiv = styled.div`
  margin: 0.2em 0.5em 0.5em 0.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const DateDiv = styled.div`
  width: 1.5em;
`;
const EventDate = styled.p`
  line-height: 2;
  font-size: 1em;
  font-weight: 650;
  color: ${colors.darkMainColor};
  padding-top: 0.2em;
  padding-left: 0.2em;
`;

const TextDescriptionDiv = styled.div`
  width: 14.5em;
  margin-left: 1em;
  margin-top: 0.4em;
  display: flex;
  flex-flow: column nowrap;
`;

const DescriptionTitle = styled.h2`
  font-size: 1em;
  font-weight: 600;
  color: ${colors.darkMainColor};
  text-align: left;
`;

const Description = styled.p`
  font-size: 0.8em;
  font-weight: 400;
  color: ${colors.mainColor};
  text-align: left;
`;
