import React from "react";

export default function event() {
  var exampleCallback = function () {
    console.log("Order complete!");
  };

  window.EBWidgets.createWidget({
    // Required
    widgetType: "checkout",
    eventId: "163175292693",
    iframeContainerId: "eventbrite-widget-container-163175292693",

    // Optional
    iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: exampleCallback, // Method called when an order has successfully completed
  });
  return (
    <div>
      <div id="eventbrite-widget-container-163175292693"></div>
    </div>
  );
}
