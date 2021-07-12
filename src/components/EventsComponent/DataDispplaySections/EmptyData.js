import React from "react";
import styled from "styled-components";

export default function EmptyData() {
  return (
    <MainDiv>
      <p>Sorry No session available</p>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
