import React from "react";
import axios from "axios";
import styled from "styled-components";
import EventsCard from "../EventsCard";

function RecordingsDiv({ data }) {
  return (
    <EventsComponentDiv>
      {data.map((recording) => (
        <EventsCard props={recording} key={recording.id} />
      ))}
    </EventsComponentDiv>
  );
}

export default RecordingsDiv;

const EventsComponentDiv = styled.div`
  padding: 1em 1em 2em 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;

  @media (min-width: 800px) {
    padding: 1em 4em 2em 4em;
    align-items: center;
    justify-content: center;
  }
`;
