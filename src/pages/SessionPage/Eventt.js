import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";

export default function Eventt({ eventId }) {
  return (
    <MainDiv>
      <noscript></noscript>

      <a
        href={`https://www.eventbrite.com/e/html-css-for-beginners-tickets-${eventId}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button id="eventbrite-widget-modal-trigger-163175292693" type="button">
          Get your FREE ticket here.
        </Button>
      </a>

      <noscript>Buy Tickets on Eventbrite</noscript>

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
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-163175292693',
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
