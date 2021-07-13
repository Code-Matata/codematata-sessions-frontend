import React from "react";

export default function event() {
  var exampleCallback = function () {
    console.log("Order complete!");
  };

  window.EBWidgets.createWidget({
    widgetType: "checkout",
    eventId: "163175292693",
    modal: true,
    modalTriggerElementId: "eventbrite-widget-modal-trigger-163175292693",
    onOrderComplete: exampleCallback,
  });
  return (
    <>
      <button id="eventbrite-widget-modal-trigger-163175292693" type="button">
        Buy Tickets
      </button>
    </>
  );
}
