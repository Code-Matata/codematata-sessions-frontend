import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import CodeImage from "../../resources/van.jpg";
import { withRouter, Link } from "react-router-dom";

function LostPage() {
  return (
    <MainDiv>
      <Title>404</Title>
      <Description>You seem to be lost, amigo.</Description>
      <Link
        to="/"
        style={{
          color: "white",
          borderBottom: "2px solid white",
          margin: "1.5em 0 1.5em 0",
        }}
      >
        Go Back Home
      </Link>

      <MiniDescription>
        Or watch a bit of Fluffy, then go back home.
      </MiniDescription>
      <IframeDiv
        width="90%"
        height="480"
        src="https://www.youtube.com/embed/Tz7TKS5Q3Xg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></IframeDiv>
    </MainDiv>
  );
}

export default withRouter(LostPage);

const MainDiv = styled.div`
  height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray};
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(38, 42, 85)),
    url(${CodeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3em;
`;

const Title = styled.h3`
  color: ${colors.white};
  font-size: 4em;
  font-weight: 800;
`;

const Description = styled.p`
  color: ${colors.white};
  font-size: 1.3em;
  font-weight: 400;
  text-align: center;
`;

// const Button = styled.button`
//   height: 3em;
//   width: 50%;
//   background-color: ${colors.mainColor};
//   color: ${colors.white};
//   margin: 1em 0 1em 0;
//   border-radius: 5px;
//   :focus {
//     outline: none;
//   }

//   @media (min-width: 800px) {
//     width: 20%;
//     margin: 2em 0 2em 0;
//   }
// `;

const MiniDescription = styled.p`
  color: ${colors.white};
  font-size: 0.9em;
  font-weight: 400;
  text-align: center;
`;

const IframeDiv = styled.iframe`
  margin-top: 1em;
  width: 100%;
  height: 250px;
  border-radius: 7px;
  @media (min-width: 480px) {
    height: 300px;
    width: 80%;
  }
  @media (min-width: 800px) {
    height: 30vh;
    width: 50%;
  }
`;
