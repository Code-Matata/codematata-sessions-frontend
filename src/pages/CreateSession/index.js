import React from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import CodeImage from "../../resources/feathers.jpg";

function CreateSession() {
  return (
    <MainDiv>
      <Title>Request to create a session</Title>
      <Iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScEGkVWsFlU2RKpswmxoAanigxUK0ZiK6Bxe3Pkp23oa8yAKg/viewform?embedded=true"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Tusomeni"
      >
        Loading…
      </Iframe>
    </MainDiv>
  );
}

export default CreateSession;

const MainDiv = styled.div`
  padding-top: 8em;
  height: auto;
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
`;

const Title = styled.h3`
  color: ${colors.white};
  font-size: 1.7em;
  font-weight: 700;
  margin: 0 2em 0 2em;
  text-align: center;
  border-bottom: 1.5px solid ${colors.white};
`;

const Iframe = styled.iframe`
  height: 1200px;
  width: 95%;
  margin-top: 2em;

  @media (min-width: 600px) {
    height: 1000px;
  }
`;
