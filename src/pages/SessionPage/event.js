import React from "react";

export default function event() {
  return (
    <>
      <noscript></noscript>
      <button id="eventbrite-widget-modal-trigger-163175292693" type="button">
        <a
          href="https://www.eventbrite.com/e/html-css-for-beginners-tickets-163175292693"
          rel="noopener noreferrer"
          target="_blank"
        >
          Buy Tickets
        </a>
      </button>
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
    </>
  );
}
