import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";

function EventsComponentHeader() {
  return (
    <MainDiv>
      <Title>Upcoming Events</Title>
    </MainDiv>
  );
}

export default EventsComponentHeader;

const MainDiv = styled.div`
  margin: 0 0 0 1.6em;
  @media (min-width: 800px) {
    margin: 0 0 0 12em;
  }
`;

const Title = styled.h3`
  font-size: 1.4em;
  font-weight: 700;
  color: ${colors.darkMainColor};

  @media (min-width: 800px) {
    font-size: 1.7em;
  }
`;
