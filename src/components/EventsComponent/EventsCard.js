import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import CodeImage from "../../resources/code-1.jpg";

function EventsCard() {
  return (
    <MainCardDiv>
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
          <DescriptionTitle>JavaScript 101 with Steve Kibuika</DescriptionTitle>
          <Description>
            A simple introduction to the fundamentals of JavaScript.
          </Description>
        </TextDescriptionDiv>
      </EventDescriptionDiv>
    </MainCardDiv>
  );
}

export default EventsCard;

const MainCardDiv = styled.div`
  height: 17em;
  width: 16em;
  border-radius: 5px;
  background-color: ${colors.white};
  margin: 1em 1em 2em 1em;

  @media (min-width: 800px) {
    height: 19em;
    width: 17.5em;
  }
`;

const ImageDiv = styled.div`
  height: 9em;
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
    height: 11em;
  }
`;

const EventDescriptionDiv = styled.div`
  margin: 0.4em 0.5em 0.5em 0.5em;
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
  margin-top: 0.2em;
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
`;

const Description = styled.p`
  font-size: 0.8em;
  font-weight: 400;
  color: ${colors.mainColor};
`;
