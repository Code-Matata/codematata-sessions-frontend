import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../resources/ThemeColors";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RecordedSession() {
  let query = useQuery();
  var id = query.get("id");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    var config = {
      method: "get",
      url: `https://code-matata.herokuapp.com/api/v1/recording/${id}`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjI2MTAxNjA1LCJleHAiOjE2MjY5NjU2MDV9.R8JEJhOK03c5-01mQbSnUjrnGjNgjlls0PtPxTus-chX1XfRFrW-RIB-7ocYcV1IE7zudPPS80C9q74EnlmjLg",
      },
    };

    axios(config)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);
  return (
    <MainDiv>
      {isLoading ? (
        <LoaderDiv>
          <Loader type="ThreeDots" color="#262a52" height={70} width={70} />
        </LoaderDiv>
      ) : (
        <SessionDescriptionDiv>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h4 style={{ display: "inline-block", float: "right" }}>
            by {data.instructor.name}
          </h4>
          <ButtonsDiv>
            <IframeDiv
              src={data.videoUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowfullscreen
            ></IframeDiv>
          </ButtonsDiv>
        </SessionDescriptionDiv>
      )}
    </MainDiv>
  );
}

export default RecordedSession;

const MainDiv = styled.div`
  height: auto;
  padding: 6em 1.5em 2em 1.5em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.gray};
  @media (min-width: 600px) {
    padding-top: 8em;
  }
  @media (min-width: 800px) {
    padding-top: 8em;
  }
`;

const SessionDescriptionDiv = styled.div`
  height: auto;
  width: 100%;
  margin-top: 2em;

  > h2 {
    font-size: 1.2em;
    text-align: left;
    font-weight: bold;
    color: ${colors.darkMainColor};
    @media (min-width: 600px){
      font-size: 1.5em;
    }
    @media (min-width: 800px) {
      font-size: 1.5em;
    }
  }

  > p {
    font-size: 0.9em;
    text-align: left;
    margin-top: 0.7em;
    colors: ${colors.mainColor};
    @media (min-width: 600px){
      font-size: 1em;
    }
    @media (min-width: 800px) {
      font-size: 1.1em;
    }
  }

> h4 {
  display: inline-block;
  float: right:
  font-size: 0.9em;
  colors: ${colors.mainColor};
  margin-top: 0.5em;
}

  @media (min-width: 480px) {
    width: 90%;
  }
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const ButtonsDiv = styled.div`
  height: auto;
  width: 100%;
  margin-top: 2em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const IframeDiv = styled.iframe`
  margin-top: 1em;
  width: 100%;
  height: 250px;
  border-radius: 7px;
  @media (min-width: 480px) {
    height: 300px;
  }
  @media (min-width: 800px) {
    height: 450px;
  }
`;

const LoaderDiv = styled.div`
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;
