import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";

function EventsComponentHeader({ handleActiveTab }) {
  return (
    <MainDiv>
      <Button
        onClick={() => handleActiveTab("events")}
        style={{ borderLeftColor: "white" }}
      >
        Live Events
      </Button>
      <Button onClick={() => handleActiveTab("recordings")}>Recordings</Button>
    </MainDiv>
  );
}

export default EventsComponentHeader;

const MainDiv = styled.div`
  padding: 1em 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    padding: 1em 0 0 0;
  }
`;

const Title = styled.h3`
  font-size: 1.4em;
  font-weight: 700;
  color: ${colors.darkMainColor};
`;

const Button = styled.button`
  width: 40%;
  height: 3em;
  font-size: 1.1em;
  font-weight: 700;
  color: ${colors.white};
  background-color: ${colors.darkMainColor};

  :hover {
    background-color: #93329e;
  }

  :focus {
    background-color: #93329e;
    outline: none;
  }
`;
