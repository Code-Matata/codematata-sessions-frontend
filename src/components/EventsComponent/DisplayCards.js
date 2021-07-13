import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import { useHistory } from "react-router-dom";

export function RecordingsCard({ props }) {
  const history = useHistory();

  return (
    <MainCardDiv
      onClick={() =>
        history.push({
          pathname: "/recorded-session",
          search: `?name=${props.title}&id=${props.id}`,
        })
      }
    >
      <ImageDiv>
        <img
          src={props.imageUrl.url}
          alt={props.description}
          loading="lazy"
        ></img>
      </ImageDiv>
      <EventDescriptionDiv>
        <TextDescriptionDiv>
          <DescriptionTitle>{props.title}</DescriptionTitle>
          <Description>{props.description}</Description>
        </TextDescriptionDiv>
      </EventDescriptionDiv>
    </MainCardDiv>
  );
}

export function EventsCard({ props }) {
  const history = useHistory();

  return (
    <MainCardDiv
      onClick={() =>
        history.push({
          pathname: "/live-session",
          search: `?name=${props.title}&id=${props.id}`,
        })
      }
    >
      <ImageDiv>
        <img
          src={props.imageUrl.url}
          alt={props.description}
          loading="lazy"
        ></img>
      </ImageDiv>
      <TopDiv>
        <TypeDiv>
          <Type>{props.date.eventMonth}</Type>
          <Type>{props.date.date}</Type>
        </TypeDiv>
      </TopDiv>
      <EventDescriptionDiv>
        <TextDescriptionDiv>
          <DescriptionTitle>{props.title}</DescriptionTitle>
          <Description>{props.description}</Description>
        </TextDescriptionDiv>
      </EventDescriptionDiv>
    </MainCardDiv>
  );
}

const MainCardDiv = styled.button`
  height: auto;
  width: 16em;
  border-radius: 5px;
  background-color: ${colors.white};
  margin: 1em 1em 2em 1em;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  transition: box-shadow 500ms;
  position: relative;

  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
  :focus {
    outline: none;
  }

  @media (min-width: 800px) {
    height: auto;
    width: 18em;
  }
`;

const ImageDiv = styled.div`
  height: 12em;
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
    object-fit: contain;
  }
  @media (min-width: 800px) {
    height: 14em;
  }
`;

const EventDescriptionDiv = styled.div`
  margin: 0.2em 0.5em 0.5em 0.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;

  @media (min-width: 800px) {
    height: auto;
  }
`;

// const DateDiv = styled.div`
//   width: 1.5em;
// `;
// const EventDate = styled.p`
//   line-height: 2;
//   font-size: 1em;
//   font-weight: 650;
//   color: ${colors.darkMainColor};
//   padding-top: 0.2em;
//   padding-left: 0.2em;
// `;

const TextDescriptionDiv = styled.div`
  width: 14.5em;
  margin-left: 0.5em;
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

const TopDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0.4em;
  margin-top: 0.2em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
`;

const TypeDiv = styled.div`
  height: auto;
  width: auto;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 5px;
  margin-right: ${(props) => (props.space ? "0.3em" : "0")};
  background-color: ${colors.darkMainColor};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Type = styled.p`
  font-size: 1em;
  font-weight: 600;
  color: ${colors.white};
`;
