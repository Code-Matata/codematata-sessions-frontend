import React from "react";
import styled from "styled-components";
import RecordingsDiv from "./DataDispplaySections/RecordingsDiv";
import renderIf from "render-if";

function EventsComponent({ activeTab }) {
  return (
    <MainSection>
      {renderIf(activeTab === "events")(<RecordingsDiv />)}
      {renderIf(activeTab === "recordings")(<RecordingsDiv />)}
    </MainSection>
  );
}

export default EventsComponent;

const MainSection = styled.section`
  margin-top: 2em;
  color: black;
  @media (min-width: 800px) {
    width: 96vw;
  }
`;
