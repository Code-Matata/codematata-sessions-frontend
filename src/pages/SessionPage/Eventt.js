import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";

export default function Eventt({ eventId }) {
  return (
    <MainDiv>
      <div id="eventbrite-widget-container-163175292693"></div>

      <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
    var exampleCallback = function() {
        console.log('Order complete!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '163175292693',
        iframeContainerId: 'eventbrite-widget-container-163175292693',

        iframeContainerHeight: 425,  
        onOrderComplete: exampleCallback  
    });

        `,
        }}
      />
    </MainDiv>
  );
}

const MainDiv = styled.div`
  margin-top: 1em;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
`;

const Button = styled.button`
  margin-top: 0.4em;
  width: auto;
  height: 3em;
  background-color: ${colors.mainColor};
  color: ${colors.white};
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 4px;

  :focus {
    outline: none;
  }
`;
