import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "../App.css";

const Typer = () => {
  return (
    <ReactTypingEffect
      text={[
        " Design UI/UX.",
        " code UI/UX.",
        "build back-ends",
        " Network.",
        "analyse data",
        "teach machines to learn",
      ]}
      className="typing-text"
      speed={30}
      eraseSpeed={100}
      eraseDelay={6000}
      typingDelay={500}
    />
  );
};

export default Typer;
