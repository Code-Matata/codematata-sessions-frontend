import React from "react";
import styled from "styled-components";
import EventsCard from "./EventsCard";
import EventsComponentHeader from "./EventsComponentHeader";

function EventsComponent() {
  return (
    <MainSection>
      <EventsComponentHeader />
      <EventsComponentDiv>
        <EventsCard></EventsCard>
        <EventsCard></EventsCard>
        <EventsCard></EventsCard>
        <EventsCard></EventsCard>
        <EventsCard></EventsCard>
      </EventsComponentDiv>
    </MainSection>
  );
}

export default EventsComponent;

const MainSection = styled.section`
  margin-top: 2em;
  color: black;
`;

const EventsComponentDiv = styled.div`
  padding: 1em 1em 2em 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
`;
